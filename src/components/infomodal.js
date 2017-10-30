"use strict"

import React, { Component } from 'react';
import { Button,Modal} from 'react-bootstrap'//not modal shows warnings in console should be fixed with next update

class Info extends Component {
  constructor(props) {
    super(props)
    //initialize modal state and assign params on open
    this.state={
      show:false
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevProps.message!==this.props.message){
      this.setState({show:true})
    }
      //
  }
  open(){
  this.setState({
    show:true
  })
  }
  close(){
    //when modal is closed reset back to original state
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.close.bind(this)}
        container={this}
        aria-labelledby="contained-modal-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{this.props.message}</Modal.Title>
      </Modal.Header>
    </Modal>
    );
  }

}

export default Info;
