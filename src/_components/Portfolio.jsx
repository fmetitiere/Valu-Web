import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MDBIcon } from "mdbreact";

import Data from "../_components/PortfolioData";

import { Layout, Header, Main, Left, H3, Center } from "../Layout";

function changeGrid({ fourthCol }) {
  return (
    (fourthCol &&
      `
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "1 2";
      `) ||
    `
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "1 2";
      `
  );
}

function changePortfolioHeight({ mobile }) {
  return mobile ? "height:70rem; margin-bottom:4rem;" : "height:45rem;";
}

const PortContainer = styled.div`
  display: grid;
  ${changeGrid}
  ${changePortfolioHeight};
  width: 100%;
  grid-gap: 2rem;
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
  box-shadow: ${(props) => props.theme.Shadows};
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;
`;

const PortfolioTitle = styled.div`
  width: 100%;
  height: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.PrimaryColor};
  p {
    margin: 0;
    font-weight: bold;
  }
`;

const PortfolioLimit = styled.div`
  height: 50rem;
  overflow-y: auto;
  padding: 0 1rem;
  ::-webkit-scrollbar {
    background: transparent;
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5rem;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: blue;
  font-size:0.75rem;
  color:white;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.PrimaryColor};
  border-radius: 0 0 0 0.5rem;
`;

function PortElement({ title, skills, type, imgPath, link, ...props }) {
  return (
    <Link to={link}>
      <BackgroundSmall {...props} imgPath={imgPath}>
        <Label>{skills}</Label>
        <PortfolioTitle>
          <p>{title}</p>
        </PortfolioTitle>
      </BackgroundSmall>
    </Link>
  );
}

function DataComponent() {
  return Data.map((element) => (
    <PortElement
      link={`/article/${element.name}`}
      imgPath={element.img}
      title={element.name}
      skills={element.skills}
      type={element.type}
    ></PortElement>
  ));
}

function DataArray({ fourthCol, mobile }) {
  return (
    <PortContainer mobile={mobile} fourthCol={fourthCol}>
      <DataComponent />
    </PortContainer>
  );
}

export default function Portfolio({ desktop }, ...props) {
  return (
    <>
      {(desktop && (
        <PortfolioLimit>
          <H3 left>Portfolio</H3>
          <DataArray fourthCol />
        </PortfolioLimit>
      )) || (
         
            <DataArray mobile />
      )}
    </>
  );
}
