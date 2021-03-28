import React from "react";
import styled from "styled-components";
import { H5, SMALL } from "../Layout/";
import { Link } from "react-router-dom";

import Data from "../_components/PortfolioData";
import { MDBIcon } from "mdbreact";

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
  return desktop ? "15rem" : "12rem";
}

const Section = styled.div`
  height: ${changeSectionSize};
  border-radius: 0.5rem;
  display: flex;
  color: unset;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.Shadows};
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
    color: ${(props) => props.theme.NavBarMenuColor};
  }
`;
const ProyectDesc = styled.div`
  padding: .5rem 0 0 1rem;
  span{
    text-transform: uppercase
    color: ${(props) => props.theme.NavBarMenuColor}; 
  }
`;

function PostElement({
  title,
  desc,
  skill,
  company,
  country,
  imgPath,
  desktop,
  link,
  center,
}) {
  
  return (
    <Link to={link}>
      <Wrapper>
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
            <SMALL>{skill}</SMALL>
            {desc && <H5>{desc}</H5>}
          </ProyectDesc>
        </Section>
      </Wrapper>
    </Link>
  );
}


function CountPosts({desktop}){
  return(
    Data.slice(0, 3).map(element => <PostElement
      imgPath={element.img}
      title={element.name}
      desc={element.author}
      skill={element.skills}
      company={element.company}
      country={element.country}
      link={`/article/${element.name}`}
      desktop={desktop}
      center
    />)
  )
}



export default function Posts() {
  return <CountPosts/>;
}
