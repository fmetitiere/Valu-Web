import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import { MDBIcon } from "mdbreact";

import {
  PathfindersBack,
  ManuBack,
  Proyecto2000,
  Benfica,
  Piccot,
  IdWeb,
  Xolos,
  Airwheel,
  SinLimite,
  NorAuto,
  Criterium,
  Danzar,
  KLD,
  Gire
} from "../_components/Backgrounds";
import { Layout, Header, Main, Left, Center } from "../Layout";

const PortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "1 2";
  height: 15rem;
  width: 100%;
`;

function changeBackground({ imgPath }) {
  return imgPath?`background:url(${imgPath});` : '';
}

function changeBackPosition({ right, left }) {
  return (right && "right") || (left && "20%");
}

const BackgroundSmall = styled.div`
  width: 90%;
  height: 92%;
  align-self: center;
  justify-self: center;
  ${changeBackground}
  background-position: ${changeBackPosition} top;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.Shadows};
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PortfolioTitle = styled.div`
  width: 100%;
  height: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    rgba(96, 124, 234, 0.9) 0%,
    rgba(105, 186, 241, 0.9) 100%
  );
  p {
    margin: 0;
    font-weight: bold;
  }
`;

function PortElement({ title, imgPath, modal = true, ...props }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BackgroundSmall
        {...props}
        onClick={() => setShowModal(true)}
        imgPath={imgPath}
      >
        <PortfolioTitle>
          <p>{title}</p>
        </PortfolioTitle>
      </BackgroundSmall>
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
  background-size: cover;
  background-repeat: no-repeat;
`;
export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <Layout noPadding>
          <Header>
            <Left>
              <MDBIcon
                onClick={() => this.props.history.goBack()}
                icon="arrow-left"
              />
            </Left>
            <Center>Portfolio</Center>
          </Header>

          <Main noPadding>
            <PortContainer>
              <PortElement imgPath={Gire} title="Rapipago"></PortElement>

              <PortElement
                imgPath={PathfindersBack}
                title="Pathfinders"
              ></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement
                right
                imgPath={ManuBack}
                title="Manuel DiCiervo"
              ></PortElement>
              <PortElement
                imgPath={Proyecto2000}
                title="Proyecto 2000"
              ></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement left imgPath={Benfica} title="Benfica"></PortElement>
              <PortElement right imgPath={Piccot} title="Piccot"></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement left imgPath={IdWeb} title="ID"></PortElement>
              <PortElement imgPath={Xolos} title="Xolos"></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement imgPath={Airwheel} title="Airwheel"></PortElement>
              <PortElement left imgPath={NorAuto} title="NorAuto"></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement
                left
                imgPath={Criterium}
                title="Criterium"
              ></PortElement>
              <PortElement imgPath={Danzar} title="Danzar"></PortElement>
            </PortContainer>
            <PortContainer>
              <PortElement
                left
                imgPath={SinLimite}
                title="Sin Limite"
              ></PortElement>

              <PortElement
                left
                imgPath={KLD}
                title="KLD Argentina"
              ></PortElement>
            </PortContainer>
          </Main>
        </Layout>
      </>
    );
  }
}
