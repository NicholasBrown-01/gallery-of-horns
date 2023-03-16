import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
render() {
  return (
    <>
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal} >
        <Modal.Header closeButton>{this.props.selectedBeastDesc}
        </Modal.Header>
        <Modal.Body><img src={this.props.selectedBeastImg} alt={this.props.selectedBeastDesc} style={{width: '18rem'}}/></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
  }
}


export default SelectedBeast;