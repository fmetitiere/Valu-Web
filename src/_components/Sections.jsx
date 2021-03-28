import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 1rem;
  margin: 1rem 0;
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
      
      <Section to="/education">
        <p>Education</p>
      </Section>
      <Section to="/about">
        <p>Bio & Skills</p>
      </Section>
    </Wrapper>
  );
}
