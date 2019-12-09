import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import { MDBIcon } from "mdbreact";

import {Data} from '../_components/PortfolioData';

import {
  Layout,
  Header,
  Main,
  Left,
  Center
} from "../Layout";

function changeGrid({ fourthCol }) {
  return (
    (fourthCol &&
      `
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-areas: "1 2 3 4";
      `) ||
    `
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "1 2";
      `
  );
}

function changePortfolioHeight({mobile}){
  return(
    mobile && "height:70rem; margin-bottom:4rem;" || "height:40rem;"
  )
}

const PortContainer = styled.div`
  display: grid;
  ${changeGrid}
  ${changePortfolioHeight};
  width: 100%;
  grid-gap: 1rem;
`;

function changeBackground({ imgPath }) {
  return imgPath ? `background:url(${imgPath});` : "";
}

function changeBackPosition({ right, left }) {
  return (right && "right") || (left && "20%");
}

const BackgroundSmall = styled.div`
  width: 100%;
  height: 100%;
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


const BackgroundLarge = styled.div`
  width: 16rem;
  height: 60vh;
  ${changeBackground}
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
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

function DataComponent(){
  return(
    Data.map(element => <PortElement imgPath={element.name} title={element.text}></PortElement>)
  )
}

function DataArray({fourthCol, mobile}){
  return(
    <PortContainer mobile={mobile} fourthCol={fourthCol}><DataComponent/></PortContainer>
  )
}

export default function Portfolio({ desktop }, ...props) {
  return (
    <div>
      {(desktop && (
         <>
         <DataArray fourthCol/> 
         </>
      )) || (
        <Layout noPadding>
          <Header>
            <Left>
            <MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
            </Left>
            <Center>Portfolio</Center>
          </Header>
          <Main>
            <DataArray mobile/> 
          </Main>
        </Layout>
      )}
    </div>
  );
}
