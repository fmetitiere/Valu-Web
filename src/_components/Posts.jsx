import React from "react";
import styled from "styled-components";
import { H5 } from "../Layout/";

import { MDBIcon } from "mdbreact";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Section = styled.a`
  height: 20rem;
  border: 1px solid;
  border-radius: 0.5rem;
  display: flex;
  color: unset;
  flex-direction: column;
  overflow: hidden;
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

export default function Posts() {
  return (
    <Wrapper>
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
  );
}
