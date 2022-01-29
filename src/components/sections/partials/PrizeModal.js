import React from "react";
import Modal from "../../elements/Modal";
import Button from "../../elements/Button";
import Image from "../../elements/Image";

class PrizeModal extends React.Component {
  state = {
    showModal: false,
  };

  openModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.openModal}>
          Weekly prize chart
        </Button>
        <Modal show={this.state.showModal} handleClose={this.closeModal}>
         <Image src={require('../../../assets/images/prize.png')} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default PrizeModal;
