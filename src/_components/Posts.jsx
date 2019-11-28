import React, { useState } from "react";
import styled from "styled-components";
import { H5, SMALL } from "../Layout/";
import { PathfindersBack, Gire } from "../_components/Backgrounds";

import { MDBIcon } from "mdbreact";
import Modal from "react-responsive-modal";

function changeBackground({ imgPath }) {
  return imgPath ? imgPath : "";
}

function changeBackPosition({ right, left }) {
  return (right && "right") || (left && "left");
}

const Wrapper = styled.div`
  width: 100%;
`;

function changeSectionSize({ desktop }) {
  return desktop ? "28rem" : "20rem";
}
function changeImageSize({ desktop }) {
  return desktop ? "20rem" : "12rem";
}

const Section = styled.div`
  height: ${changeSectionSize};
  border-radius: 0.5rem;
  display: flex;
  color: unset;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${props => props.theme.Shadows};
  margin-bottom: 1rem;  
`;

const Image = styled.div`
  height: ${changeImageSize};
  width: 100%;
  background: url(${changeBackground});
  background-position: ${changeBackPosition} top;
  background-size: cover;
`;

const ProyectName = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span,
  i {
    color: ${props => props.theme.NavBarMenuColor};
  }
`;
const ProyectDesc = styled.div`
  padding: .5rem 0 0 1rem;
  span{
    text-transform: uppercase
    color: ${props => props.theme.NavBarMenuColor}; 
  }
`;
const ImageModal = styled.div`
  width: 18rem;
  height: 60vh;
  background: url(${changeBackground});
  background-position: center top;
  background-size: cover;
`;

function PostElement({ title, desc, page, time, imgPath, desktop }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setShowModal(true)}>
        <Section desktop={desktop} href="/about">
          <ProyectName>
            <H5>{title}</H5>
            <div>
              <span>{time} h - </span>
              <MDBIcon icon="globe-americas" />
            </div>
          </ProyectName>
          <Image desktop={desktop} imgPath={imgPath} />
          <ProyectDesc>
            <SMALL>{page}</SMALL>
            <H5>{desc}</H5>
          </ProyectDesc>
        </Section>
      </Wrapper>
      <Modal open={showModal} onClose={() => setShowModal(false)} center>
        <h2>{title}</h2>
        <ImageModal imgPath={imgPath} />
      </Modal>
    </>
  );
}

export default function Posts({desktop}) {
  return (
    <>
      <PostElement
        imgPath={Gire}
        title="Rapipago"
        desc="Digital Wallet"
        page="UX UI Develop"
        time="1"
        desktop={desktop}
      />
      <PostElement
        imgPath={PathfindersBack}
        title="Pathfinders"
        desc="Video Game Studio"
        page="Web Design"
        time="4"
        desktop={desktop}
      />
    </>
  );
}
