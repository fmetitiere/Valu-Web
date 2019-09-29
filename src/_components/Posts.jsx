import React, { Component } from "react";
import styled from "styled-components";
import { H5 } from "../Layout/";

import { MDBIcon } from "mdbreact";
import Modal from "react-responsive-modal";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Section = styled.div`
  height: 20rem;
  border: 1px solid;
  border-radius: 0.5rem;
  display: flex;
  color: unset;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem 0;
`;

const Image = styled.div`
  background: black;
  height: 12rem;
  width: 100%;
`;

const ProyectName = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProyectDesc = styled.div`
  padding: 1rem;
`;

export default class Posts extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModal2 = () => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };

  onOpenModal3 = () => {
    this.setState({ open3: true });
  };

  onCloseModal3 = () => {
    this.setState({ open3: false });
  };

  render() {
    const { open } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;


    return (
      <>
        <Wrapper onClick={this.onOpenModal}>
          <Section href="/about">
            <ProyectName>
              <H5>Test 1</H5>
              <div>
                <span>1 h - </span>
                <MDBIcon icon="globe-americas" />
              </div>
            </ProyectName>
            <Image />
            <ProyectDesc>
              <span>www.nanometitiere.com</span>
              <H5>Portfolio</H5>
            </ProyectDesc>
          </Section>
        </Wrapper>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>

        <Wrapper onClick={this.onOpenModal2}>
          <Section href="/about">
            <ProyectName>
              <H5>Test 1</H5>
              <div>
                <span>1 h - </span>
                <MDBIcon icon="globe-americas" />
              </div>
            </ProyectName>
            <Image />
            <ProyectDesc>
              <span>www.nanometitiere.com</span>
              <H5>Portfolio</H5>
            </ProyectDesc>
          </Section>
        </Wrapper>
        <Modal open={open2} onClose={this.onCloseModal2} center>
          <h2>Simple centered modal 2</h2>
        </Modal>

        <Wrapper onClick={this.onOpenModal3}>
          <Section href="/about">
            <ProyectName>
              <H5>Test 1</H5>
              <div>
                <span>1 h - </span>
                <MDBIcon icon="globe-americas" />
              </div>
            </ProyectName>
            <Image />
            <ProyectDesc>
              <span>www.nanometitiere.com</span>
              <H5>Portfolio</H5>
            </ProyectDesc>
          </Section>
        </Wrapper>
        <Modal open={open3} onClose={this.onCloseModal3} center>
          <h2>Simple centered modal 3</h2>
        </Modal>
      </>
    );
  }
}
