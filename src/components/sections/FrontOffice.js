import React from "react";


const FrontOffice = () => {
    const readMore = (id) => {
        console.log(id);
        let readMore = document.getElementById(id);
        let readMoreBtn = document.getElementById(id + 'Btn');
        if (readMoreBtn.innerText === "READ MORE") {
            readMore.style.display = "block";
            readMoreBtn.innerText = "Read Less"
        } else {
            readMore.style.display = "none";
            readMoreBtn.innerText = "Read More"
        }
    }

    return (
        <section className="testimonial section" id="frontOffice">
                <div className="container">
                    <div className="testimonial-inner section-inner has-top-divider">
                        <div className="section-header center-content">
                            <div className="container-xs">
                                <h2 className="m-0 inter">Front Office</h2>
                            </div>
                        </div>
                        <div className="tiles-wrap illustration-section-03">
                            <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap"
                                data-reveal-delay="300">
                                <div className="tiles-item-inner has-shadow">
                                    <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                                        <div className="team-item-image mb-24"><img src={require('../../assets/images/bunchu.png')} 
                                                alt="Team member 01" width={180} height={180} /></div>
                                    </div>
                                    <div className="team-item-content">
                                        <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom"
                                            data-reveal-container=".tiles-item">Bunchu</h5>
                                        <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom"
                                            data-reveal-container=".tiles-item" data-reveal-delay="150">Co-Founder
                                        </div>
                                        <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item"
                                            data-reveal-delay="300">Bunchu is a co-founder of dGen.Network, co-host of
                                            The Mint Condition and REKT Podcasts, and a founding member of NFT
                                            RedZone.<span className="hidden" id="bunchurm">He was introduced to Bitcoin and
                                                Ethereum in 2017 via his sports betting habits and now he is a full time
                                                NFT degenerate. He has been playing fantasy football for over 14 years
                                                and is an extremely dedicated fantasy manager. Bunchu is ready to take
                                            team dGen to the ship!</span>
                                        <button className="button button-primary button-block mt-12" onClick={() => readMore('bunchurm')} id="bunchurmBtn">Read More </button>
                                                {/* <Button onClick={() => readMore('bunchurm')} id="bunchurmBtn" wide className="mt-12" color="primary" onClick={readMore('bunchurm')}> Read More</Button> */}

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap">
                                <div className="tiles-item-inner has-shadow">
                                    <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                                        <div className="team-item-image mb-24"><img src={require('../../assets/images/premium.png')}
                                        alt="Team member 01" width={180} height={180} /></div>
                                    </div>
                                    <div className="team-item-content">
                                        <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom"
                                            data-reveal-container=".tiles-item">Premium Carrots</h5>
                                        <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom"
                                            data-reveal-container=".tiles-item" data-reveal-delay="150">Co-Founder
                                        </div>
                                        <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item"
                                            data-reveal-delay="300">In a former life he was an Actuary/Data
                                            Scientist having worked in Insurance and Banking industries now turned
                                            full time degenerate. 
                                            <span className="hidden" id="premiumrm"> He has been wagering on sports and playing in
                                                Fantasy Football for over 15 years and currently manages 6 teams (5
                                                dynasties and 1 season long). A VP at Riot Racers, content contributor
                                                for dGen.Network, and co-founder of NFT RedZone PC is ready to bring his
                                                skills to his team and to this project! </span>
                                                <button className="button button-primary button-block mt-12" onClick={() => readMore('premiumrm')} id="premiumrmBtn">Read More </button>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap"
                                data-reveal-delay="150">
                                <div className="tiles-item-inner has-shadow">
                                    <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                                        <div className="team-item-image mb-24"><img src={require('../../assets/images/zwingli.png')}
                                                alt="Team member 01" width={180} height={180} /></div>
                                    </div>
                                    <div className="team-item-content">
                                        <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom"
                                            data-reveal-container=".tiles-item">Captain Zwingli</h5>
                                        <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom"
                                            data-reveal-container=".tiles-item" data-reveal-delay="150">Co-Founder
                                        </div>
                                        <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item"
                                            data-reveal-delay="300"> Captain is honored to be building NFT RedZone with
                                            aspirations of this project becoming one of the great connectors of
                                            communities in the NFT space.
                                            <span className="hidden" id="captainrm">Captain is a serial entrepreneur in the
                                                traditional business world, he entered the NFT space in January of ‘21
                                                and quickly became passionate about creating, building and connecting.
                                                In just a few months time Captain has created the Ape & Pony Show,
                                                co-founded StartApes and the dGen Network. An avid sports fan he has
                                                played fantasy football at a high level for a couple of decades and high
                                                stakes daily fantasy for the last 10 years.</span>
                                                <button className="button button-primary button-block mt-12" onClick={() => readMore('captainrm')} id="captainrmBtn">Read More </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default FrontOffice
