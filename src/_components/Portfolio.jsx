import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";

import { Layout, Header, Main, BottomMenu, Left, Center } from "../Layout";
import PathfindersBack from "../_components/images/path.jpg";
import ManuBack from "../_components/images/manu.jpg";
import Proyecto2000 from "../_components/images/proyecto2000.jpg";

const PortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "1 2 3";
  height: 8rem;
  width: 100%;
`;

function changeBackground({ imgPath }) {
  return imgPath ? imgPath : "";
}

const BackgroundSmall = styled.div`
  width: 100%;
  height: 100%;
  background: url(${changeBackground});
  background-position: center top;
`;

function PortElement({ title, imgPath, modal = true }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BackgroundSmall
        onClick={() => setShowModal(true)}
        imgPath={imgPath}
      ></BackgroundSmall>
      {modal && (
        <Modal open={showModal} onClose={() => setShowModal(false)} center>
          <h3>{title}</h3>
          <BackgroundLarge imgPath={imgPath} />
        </Modal>
      )}
    </>
  );
}

const BackgroundLarge = styled.div`
  width: 18rem;
  height: 60vh;

  background: url(${changeBackground});
  background-position: center top;
`;
export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <Layout noPadding>
          <Header>
            <Left>
              <button onClick={() => this.props.history.goBack()}>Back</button>
            </Left>
            <Center>Portfolio</Center>
          </Header>

          <Main noPadding>
            <PortContainer>
              <PortElement imgPath={PathfindersBack} title="Pathfinders"></PortElement>
              <PortElement imgPath={ManuBack} title="Manuel DiCiervo"></PortElement>
              <PortElement imgPath={Proyecto2000} title="Proyecto 2000"></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement imgPath={PathfindersBack} title="Pathfinders"></PortElement>
              <PortElement imgPath={ManuBack} title="Manuel DiCiervo"></PortElement>
              <PortElement imgPath={Proyecto2000} title="Proyecto 2000"></PortElement>
            </PortContainer>
          </Main>
        </Layout>
        <BottomMenu current2 />
      </>
    );
  }
}
