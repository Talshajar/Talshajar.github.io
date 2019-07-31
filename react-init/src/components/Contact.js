import React, { Component } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";


class ContactPages extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  logValue = value => {
    console.log(value);
  };

  render() {
    return (
     <section>
      <MDBContainer >
        <MDBBtn color="#e0e0e0 grey lighten-2" onClick={this.toggle} >
          Let's get in touch!
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="md"
          cascading
        >
          <MDBModalHeader
            toggle={this.toggle}
            titleClass="d-inline title"
            className="text-center #e0e0e0 grey lighten-2 black-text"
          >
            <MDBIcon icon="pencil-alt" />
            Contact From
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput label="Your name"  />
            <MDBInput label="Your email"  iconClass="dark-grey" />

            <MDBInput
              label="Your message"
              type="textarea"
              rows="2"
              icon="pencil-alt"
              iconClass="dark-grey"
            />
            <div className="text-center mt-1-half">
              <MDBBtn
                color="#e0e0e0 grey lighten-2"
                className="mb-2"
                onClick={this.toggle}
              >
                send
                <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      </section>
    );
  }
}

export default ContactPages;