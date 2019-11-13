import React, { useState } from "react";
import styled from "styled-components";
import { H5, SMALL } from "../Layout/";
import {PathfindersBack, ManuBack, Proyecto2000} from "../_components/Backgrounds";

import { MDBIcon } from "mdbreact";
import Modal from "react-responsive-modal";


function changeBackground({ imgPath }) {
  return imgPath ? imgPath : "";
}

function changeBackPosition({right, left}){
  return (right && "right") || (left && "left"); 
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;


const Section = styled.div`
  height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  color: unset;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${props => props.theme.Shadows};
`;

const Image = styled.div`
  height: 12rem;
  width: 100%;
  background: url(${changeBackground});
  background-position: ${changeBackPosition} top;
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
`;

function PostElement({title, desc, page, time, imgPath}){

  const [showModal, setShowModal] = useState(false);

  return(
    <>
    <Wrapper onClick={()=> setShowModal(true)}>
          <Section href="/about">
            <ProyectName>
              <H5>{title}</H5>
              <div>
                <span>{time} h - </span>
                <MDBIcon icon="globe-americas" />
              </div>
            </ProyectName>
            <Image imgPath={imgPath}/>
            <ProyectDesc>
              <SMALL>{page}</SMALL>
              <H5>{desc}</H5>
            </ProyectDesc>
          </Section>
        </Wrapper>
        <Modal open={showModal} onClose={()=>setShowModal(false)} center>
          <h2>{title}</h2>
          <ImageModal imgPath={imgPath}/>
        </Modal>
      </>
  )
}

export default class Posts extends React.Component {

  render() {

    return (
      <>
        <PostElement imgPath={PathfindersBack} title="Test 1" desc="Name" page="www.nanometitiere.com" time="1"/>
        <PostElement imgPath={ManuBack} title="Test 1" desc="Name" page="www.nanometitiere.com" time="1"/>
      </>
    );
  }
}
