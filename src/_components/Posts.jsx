import React, { useState } from "react";
import styled from "styled-components";
import { H5, SMALL } from "../Layout/";
import { Dinn, ManuBack, Gire } from "../_components/Backgrounds";

import { MDBIcon } from "mdbreact";
import Modal from "react-responsive-modal";

function changeBackground({ imgPath }) {
  return imgPath ? imgPath : "";
}

function changeBackPosition({ right, left, center }) {
  return (right && "right") || (left && "left") || (center && "center");
}

const Wrapper = styled.div`
  width: 100%;
`;

function changeSectionSize({ desktop }) {
  return desktop ? "auto" : "auto";
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
  padding-bottom: 1rem;
`;

const Image = styled.div`
  height: ${changeImageSize};
  width: 100%;
  background: url(${changeBackground});
  background-position: ${changeBackPosition};
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

function changeModalSize({ desktop }) {
  return (
    (desktop &&`
    width: 30rem;
    height: 75vh;
    `) ||`
    width: 18rem;
    height: 60vh;
    `
  );
}

const ImageModal = styled.div`
  ${changeModalSize}
  background: url(${changeBackground});
  background-position: center top;
  background-size: cover;
`;

function PostElement({
  title,
  desc,
  page,
  company,
  country,
  imgPath,
  desktop,
  center
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setShowModal(true)}>
        <Section desktop={desktop} href="/about">
          <ProyectName>
            <H5>{title}</H5>
            <div>
              <span>{company} </span>
              <MDBIcon icon="globe-americas" />
              <span> {country}</span>
            </div>
          </ProyectName>
          <Image center={center} desktop={desktop} imgPath={imgPath} />
          <ProyectDesc>
            <SMALL>{page}</SMALL>
            {desc && <H5>{desc}</H5>}
          </ProyectDesc>
        </Section>
      </Wrapper>
      <Modal open={showModal} onClose={() => setShowModal(false)} center>
        <h4>{title}</h4>
        <ImageModal desktop={desktop} imgPath={imgPath} />
      </Modal>
    </>
  );
}

export default function Posts({ desktop }) {
  return (
    <>
      <PostElement
        imgPath={Dinn}
        title="Dinn"
        desc="Technisys"
        page="UI Develop"
        company="Actinver"
        country="México"
        desktop={desktop}
        center
      />
      <PostElement
        imgPath={Gire}
        title="Rapipago"
        desc="Technisys"
        page="UX UI Develop"
        company="GIRE"
        country="Argentina"
        desktop={desktop}
      />
      <PostElement
        imgPath={ManuBack}
        title="Manuel DiCiervo"
        page="Web Design and Develop"
        country="Argentina"
        desktop={desktop}
      />
    </>
  );
}
