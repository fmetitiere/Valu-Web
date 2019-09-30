import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "left center right";
  width: 100%;
  grid-gap: 1rem;
  margin-top: 1rem;
`;

const Section = styled(Link)`
  height: 5rem;
  border-radius: .5rem;
  display:flex;
  align-items: center;
  justify-content: center;
  color:unset;
  background: ${(props) => props.theme.PrimaryColor};
  p{
      color: white;
      font-weight: bold;
      margin:0;
  }
`;

export default function Sections() {
  return (
    <Wrapper>
      <Section to="/about">
        <p>Portfolio</p>
      </Section>
      <Section>
        <p>Skills</p>
      </Section>
      <Section>
        <p>Bio</p>
      </Section>
    </Wrapper>
  );
}
