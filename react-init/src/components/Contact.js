import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import styled from 'styled-components';

const StyledContact = styled.div`
display: flex;
justify-content: center;
color: #A5677A;
`

const StyledInput = styled.label`
font-size: 1.25em;
color: #bbb;
font-weight: 300;
`

const ContactPage = () => {
  return (
    <StyledContact>
    <MDBContainer className="justify-content-center">
      <MDBRow>
        <MDBCol md="6">
          <form>
            <h4 id="ContactPageId">Get in touch</h4>
            <div className="grey-text">
              <StyledInput>
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
              </StyledInput>
            </div>
            <div className="text-center">
              <MDBBtn outline color="#A5677A">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </StyledContact>
  );
};

export default ContactPage;