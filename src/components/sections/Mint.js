import React, { Component } from "react";
import Web3 from 'web3';
import $ from "jquery";
import toastr from 'toastr';
import '../../toastr.css';

import { LIST_ADDRESS_MINT_RINKBY, LIST_ADDRESS_MINT_MAIN, LIST_ABI_MINT } from '../../config'

const minMintAmount = 1;
const maxMintAmount = 20;
const perTokenAmountEth = 0.07;
export default class Mint extends Component {

    constructor() {
        super();
        this.state = {
            web3: null,
            networkType: null,
            chainId: null,
            account: null,
            isEnabled: false,
            isConnecting: false,
            LIST_ADDRESS_MINT: null,
            mintWeb3Inst: null,
            mintAmount: minMintAmount,
            totalTokenAmountEth: perTokenAmountEth * minMintAmount,
            currentEthBal: '-',
            mintedTokensCount: 0,
            remainingCount: 0,
            totalCount: 0,
            mintedPerc: 0,
            isSaleActive: false,
            mintStatus: 'start',
        }

        toastr.options = {
            // positionClass: 'toast-top-full-width',
            hideDuration: 300,
            timeOut: 3000
        }

    }

    componentDidMount() {
    }

    async connectToMetaMaskNetwork() {
        if (this.state.isConnecting) {
            return;
        }
        this.setState({ isConnecting: true });
        if (window.ethereum) {
            await window.ethereum.enable().then((err, res) => {
            });
            this.state.web3 = new Web3(window.ethereum);
            window.ethereum.on('networkChanged', (chainId) => {
                // handle the new network
                // document.location.reload();
                this.setConfig();
            });
            window.ethereum.on('chainChanged', (chainId) => {
                // handle the new network
                // document.location.reload();
                this.setConfig();
            });
            window.ethereum.on('accountsChanged', (chainId) => {
                // handle the new network
                document.location.reload();
            });
            window.ethereum.on('disconnect', (chainId) => {
                document.location.reload();
            });
            try {
                await this.setConfig();
            } catch (e) {
                // User has denied account access to DApp...
                // console.log("ERROR:::::::::::::::::::::", e)
                await this.setState({ isEnabled: false });
            }
        } else if (window.web3 && window.web3.currentProvider) {
            // console.log("DONE::")
            window.web3.on('networkChanged', (chainId) => {
                // handle the new network
                // document.location.reload();
                this.setConfig();
            });
            window.web3.on('chainChanged', (chainId) => {
                // handle the new network
                // document.location.reload();
                this.setConfig();
            });
            window.web3.on('accountsChanged', (chainId) => {
                // handle the new network
                document.location.reload();
            });
            window.web3.on('disconnect', (chainId) => {
                document.location.reload();
            });
            this.state.web3 = new Web3(window.web3.currentProvider);
            try {
                await this.setConfig();
            } catch (e) {
                // User has denied account access to DApp...
                // console.log("ERROR:::::::::::::::::::::")
                await this.setState({ isEnabled: false, isConnecting: false });
            }
        } else {
            await this.setState({ isEnabled: false, isConnecting: false });
        }
    }

    async setConfig() {
        // console.log("Network changed")
        const Id = await this.state.web3.eth.net.getNetworkType();
        const chainId = await this.state.web3.eth.getChainId();
        const accounts = await this.state.web3.eth.getAccounts();
        this.state.web3.eth.defaultAccount = accounts[0];
        this.configNetwork(Id, chainId, accounts[0]);
    }

    async configNetwork(Id, chainId, account) {
        if (chainId != 1 && chainId != 4) {
            toastr.info('Wrong network choosen.');
            await this.setState({
                isEnabled: false,
                isConnecting: false,
            });
            return;
        } else if (chainId == 1 || chainId == 4) {
            let LIST_ADDRESS_MINT = null;
            if (chainId == 1) {
                LIST_ADDRESS_MINT = LIST_ADDRESS_MINT_MAIN;
            } else if (chainId == 4) {
                LIST_ADDRESS_MINT = LIST_ADDRESS_MINT_RINKBY;
            }

            let mintWeb3Inst = new this.state.web3.eth.Contract(LIST_ABI_MINT, LIST_ADDRESS_MINT);
            await this.setState({
                isEnabled: true,
                isConnecting: false,
                networkType: Id,
                chainId: chainId,
                account: account,
                LIST_ADDRESS_MINT: LIST_ADDRESS_MINT,
                mintWeb3Inst: mintWeb3Inst
            });
            this.loadData();
            this.isSaleActive();
        } else {
        }
    }


    async loadData() {

        await this.callsABI();

        setTimeout(() => {
            if (this.state.isEnabled) {
                this.loadData()
            }
        }, 5000)
    }

    async callsABI() {
        try {
            this.loadUserEthBalance();
            this.mintedTokens();
            this.totalTokenToBeMinted();
            this.tokenRemainingToBeMinted();
            this.calcMintedPerc();
        } catch (e) {
            console.error(e)
        }
    }

    async loadUserEthBalance() {
        try {
            let currentEthBal = await this.state.web3.eth.getBalance(this.state.account);
            this.setState({ currentEthBal: this.getFormatedNumber(this.getFormatFrom(Number(currentEthBal)), 1, 6) })
        } catch (e) {
            console.error(e)
        }
    }

    async isSaleActive() {
        try {
            let isSaleActive = await this.state.mintWeb3Inst.methods.isSaleActive().call();
            this.setState({ isSaleActive: isSaleActive });
        } catch (e) {
            console.error(e);
        }
    }

    async mintedTokens() {
        try {
            let mintedTokensCount = await this.state.mintWeb3Inst.methods.mintedTokens().call();
            // console.log(mintedTokensCount)
            this.setState({ mintedTokensCount: mintedTokensCount });
        } catch (e) {
            console.error(e);
        }
    }

    async totalTokenToBeMinted() {
        try {
            let totalCount = await this.state.mintWeb3Inst.methods.TOTAL_TOKEN_TO_MINT().call();
            // console.log(totalCount)
            this.setState({ totalCount: totalCount });
        } catch (e) {
            console.error(e);
        }
    }

    async tokenRemainingToBeMinted() {
        try {
            let remainingCount = await this.state.mintWeb3Inst.methods.tokenRemainingToBeMinted().call();
            // console.log(remainingCount)
            this.setState({ remainingCount: remainingCount });
        } catch (e) {
            console.error(e);
        }
    }

    async calcMintedPerc(){
        this.mintedTokens();
        this.totalTokenToBeMinted();
        if(this.state.totalCount > 0 && this.state.mintedTokensCount >= 0){
            let mintedPerc = (100 * Number(this.state.mintedTokensCount)) / Number(this.state.totalCount);
            this.setState({ mintedPerc: mintedPerc.toFixed(2) });
        }
    }

    setMaxAmount() {
        this.setState({ mintAmount: maxMintAmount, totalTokenAmountEth: perTokenAmountEth * maxMintAmount })
    }

    onPlusAmount() {
        if (this.state.mintAmount && this.state.mintAmount < maxMintAmount) {
            this.setState({ mintAmount: this.state.mintAmount + 1, totalTokenAmountEth: (perTokenAmountEth * (this.state.mintAmount + 1)) })
        }
    }

    onMinusAmount() {
        if (this.state.mintAmount && this.state.mintAmount > minMintAmount) {
            this.setState({ mintAmount: this.state.mintAmount - 1, totalTokenAmountEth: (perTokenAmountEth * (this.state.mintAmount - 1)) })
        }
    }

    async mintSubmit() {
        try {
            if (this.state.isEnabled && !this.state.isConnecting) {

                if (Number(this.state.mintAmount) <= 0 || Number(this.state.mintAmount) > 20) {
                    toastr.error("Please select from 1-20 range.")
                    return;
                }

                await this.setState({ mintStatus: 'inProgress' });
                let totalValue = this.state.mintAmount * 70000000000000000;

                if (Number(this.getFormatFrom(totalValue)) >= Number(this.state.currentEthBal)) {
                    await this.setState({ mintStatus: 'start' })
                    toastr.error("Insufficient ETH balance.")
                    return;
                }

                if (this.state.remainingCount < Number(this.state.mintAmount)) {
                    await this.setState({ mintStatus: 'start' })
                    toastr.error("Insufficient Token available to mint.");
                    return;
                }

                if (this.state.isSaleActive) {
                    await this.state.mintWeb3Inst.methods.mintNFTRZ(Number(this.state.mintAmount)).send({
                        from: this.state.account,
                        value: totalValue
                    }).then(async (result) => {
                        await this.setState({ mintStatus: 'start' })
                        this.tokenRemainingToBeMinted();
                        toastr.success("Your Token have been minted.")
                    }).catch(async (error) => {
                        // console.log(error)
                        await this.setState({ mintStatus: 'start' })
                        toastr.error("Mint Failed");
                    });
                } else {
                    await this.state.mintWeb3Inst.methods.presaleMint(Number(this.state.mintAmount)).send({
                        from: this.state.account,
                        value: totalValue
                    }).then(async (result) => {
                        await this.setState({ mintStatus: 'start' })
                        this.tokenRemainingToBeMinted();
                        toastr.success("Your Token have been minted.")
                    }).catch(async (error) => {
                        // console.log(error)
                        await this.setState({ mintStatus: 'start' })
                        toastr.error("Mint Failed");
                    });
                }

            } else {
                toastr.info("Please connect you'r wallet.")
            }
        } catch (e) {
            toastr.error("Mint Failed due to some error.")
        }

    }

    getFormatTo(amount) {
        return this.state.web3.utils.toWei((amount).toString(), "ether");
    }

    getFormatFrom(amount) {
        return this.state.web3.utils.fromWei((amount).toString(), "ether");
    }

    getFormatedNumber(num, divideBy, fixUpto) {
        if (num == 0) {
            return 0
        }
        return this.getDecimals((num / divideBy).toFixed(fixUpto));
    }

    getDecimals(str) {
        if (str.endsWith('.000000')) {
            return Number(str.replace('.000000', ''));
        } else if (str.endsWith('.00000')) {
            return Number(str.replace('.00000', ''));
        } else if (str.endsWith('.0000')) {
            return Number(str.replace('.0000', ''));
        } else if (str.endsWith('.000')) {
            return Number(str.replace('.000', ''));
        } else if (str.endsWith('.00')) {
            return Number(str.replace('.00', ''));
        } else if (str.endsWith('.0')) {
            return Number(str.replace('.0', ''));
        } else {
            return Number(str)
        }
    }

    componentWillUnmount() {
    }

    isAnyTransactionInProgress() {
        if (this.state.mintStatus == 'inprogress') {
            return true;
        }
        return false;
    }

    render() {
        return (
            <section className="mint section-inner" style={{ paddingTop: '0px' }}>
                <div className="container aa-header-content">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="center col-md-6">
                            <div className="row">
                                <div className="col-md-12" style={{ textAlign: "-webkit-center" }}>
                                    <div className="ebxalf-0 izysHK">
                                        <div className="jhay2b-0 cdpDAP">
                                            <div className="sc-htpNat nrd8cx-0 nrd8cx-1 jkIciS" style={{ width: '100%' }}>
                                                <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff" style={{ width: '100%' }}>
                                                    <div className="sc-kpOJdX iVdpDv css-10yinq6" style={{ marginRight: '8px', width: '100%', fontSize: '28px' }}>
                                                        {this.state.isSaleActive ? 'Public Mint' : 'Presale Mint'}
                                                    </div>
                                                </div>
                                                <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff">
                                                    <div className="sc-iujRgT cfsekR">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="swap-page" className="sc-jAaTju hsPStq">
                                            <div className="sc-1kykgp9-2 ekXOzO" style={{ margin: '0px 25px' }}>
                                                <div>
                                                    <div id="swap-currency-input" className="sc-33m4yg-0 bxDIXc">
                                                        <div className="sc-33m4yg-2 jwGhqt">
                                                            <div className="sc-33m4yg-4 hPbfqi">
                                                                <button
                                                                    className="sc-htpNat jkjxPR fwrjc2-0 fwrjc2-3 sc-33m4yg-3 fqphAy open-currency-select-button">
                                                                    <span className="sc-33m4yg-7 NQtCe">
                                                                        <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff">
                                                                            {/* <img src="images/binance.png" className="sc-1fvnadz-0 kfrSHW" style={{ marginRight: '0.5rem', width: '20px' }} /> */}

                                                                            <span className="sc-33m4yg-9 iaqokG token-symbol-container">ETH</span>
                                                                        </div>
                                                                    </span>
                                                                </button>
                                                                <div className="font14" style={{ marginLeft: 'auto' }}>
                                                                    <span >{this.state.currentEthBal}</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div id="swap-currency-input" className="sc-33m4yg-0 bxDIXc" style={{ marginTop: '15px' }}>
                                                        <div className="sc-33m4yg-2 jwGhqt">
                                                            <div className="sc-33m4yg-4 hPbfqi">
                                                                <button
                                                                    className="sc-htpNat jkjxPR fwrjc2-0 fwrjc2-3 sc-33m4yg-3 fqphAy open-currency-select-button">
                                                                    <span className="sc-33m4yg-7 NQtCe">
                                                                        <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff">
                                                                            <span className="sc-33m4yg-9 iaqokG token-symbol-container">AMOUNT</span>
                                                                        </div>
                                                                    </span>
                                                                </button>
                                                                <div className="value font14" style={{ marginLeft: 'auto' }}>
                                                                    <span style={{ cursor: 'pointer' }} onClick={() => { this.onMinusAmount() }}>
                                                                        <i className="fa fa-minus-circle"></i>
                                                                    </span>
                                                                    <span style={{ marginLeft: '5px', marginRight: '5px' }}> {this.state.mintAmount} </span>
                                                                    <span style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => { this.onPlusAmount() }}>
                                                                        <i className="fa fa-plus-circle"></i>
                                                                    </span>
                                                                    <span onClick={() => { this.setMaxAmount() }} style={{ cursor: 'pointer' }}>
                                                                        MAX
                                                                </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div id="swap-currency-input" className="sc-33m4yg-0 bxDIXc" style={{ marginTop: '15px' }}>
                                                        <div className="sc-33m4yg-2 jwGhqt">
                                                            <div className="sc-33m4yg-4 hPbfqi">
                                                                <button
                                                                    className="sc-htpNat jkjxPR fwrjc2-0 fwrjc2-3 sc-33m4yg-3 fqphAy open-currency-select-button">
                                                                    <span className="sc-33m4yg-7 NQtCe">
                                                                        <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff">
                                                                            {/* <img src="images/binance.png" className="sc-1fvnadz-0 kfrSHW" style={{ marginRight: '0.5rem', width: '20px' }} /> */}

                                                                            <span className="sc-33m4yg-9 iaqokG token-symbol-container">Total Price</span>
                                                                        </div>
                                                                    </span>
                                                                </button>
                                                                <div className="value font14" style={{ marginLeft: 'auto' }}>
                                                                    <span style={{ cursor: 'pointer' }}>{this.state.totalTokenAmountEth.toFixed(2)} ETH</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="swap-currency-input" className="sc-33m4yg-0 bxDIXc" style={{ marginTop: '15px' }}>
                                                        <div className="sc-33m4yg-2 jwGhqt">
                                                            {this.state.mintedPerc >= 100? <div className="sc-33m4yg-4 hPbfqi" >
                                                                <span className="sc-33m4yg-9 iaqokG token-symbol-container" style={{ width: '100%' }}>WE ARE OFFICIALY SOLD OUT!</span>
                                                            </div> : <div className="sc-33m4yg-4 hPbfqi" >
                                                                <span className="sc-33m4yg-9 iaqokG token-symbol-container" style={{ width: '100%' }}></span>
                                                            </div> }

                                                            <div style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 10px 10px' }}>
                                                                <span className="sc-33m4yg-7 NQtCe" style={{ padding: '0px 10px', width: 'auto' }}>
                                                                    <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff">
                                                                        <span className="sc-33m4yg-9 iaqokG token-symbol-container" style={{ fontSize: '14px' }}>Progress</span>
                                                                    </div>
                                                                </span>

                                                                <div className="progress_main" style={{ paddingRight: '6px', marginTop: '0px', width: '70%' }}>
                                                                    <div className="progress_border">
                                                                        <div className="progress_valuebar" style={{ width: this.state.mintedPerc+'%', float: 'left' }}></div>
                                                                    </div>
                                                                </div>
                                                                <div className="progress_value">{this.state.mintedPerc}%</div>
                                                                <div className="clear"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="sc-htpNat nrd8cx-0 dMmNk" style={{ justifyContent: "center" }}>
                                                    <div className="sc-htpNat nrd8cx-0 nrd8cx-4 IAyff"></div>
                                                </div>
                                                <div className="sc-iRbamj jHFlbY iaqokG" >
                                                    {this.state.isEnabled ?
                                                        <button id="swap-button" disabled={!(this.state.isEnabled && this.state.mintStatus == 'start')}
                                                            className="sc-htpNat jkjxPR fwrjc2-0 fwrjc2-1 eQGrAN" style={{ width: '200px' }} onClick={() => this.mintSubmit()}>
                                                            Mint
                                                        </button> :
                                                        <button id="swap-button" disabled={(this.state.isEnabled)}
                                                            className="sc-htpNat jkjxPR fwrjc2-0 fwrjc2-1 eQGrAN" style={{ width: '200px' }} onClick={() => this.connectToMetaMaskNetwork()}>
                                                            CONNECT A WALLET
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    {(this.isAnyTransactionInProgress()) ? (<div id="toast-container" className="toast-top-right">
                        <div className="toast toast-info" aria-live="assertive">
                            <div className="toast-message">Transaction is in progress.</div>
                        </div>
                    </div>) : ''}
                </div >
            </section>
        );
    }
}