import React from "react";
import styled from "styled-components";

const ExpWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "left right";
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Company = styled.div`
  grid-area: left;
  font-weight: bold;
`;
const Time = styled.div`
  grid-area: right;
  text-align: right;
  font-size: 0.8rem;
  color: #68b7f0;
`;

const Skill = styled.div`
  font-weight: 400;
`;

export default function EducationText({ show }) {
  return (
    <div>
      <ExpWrapper>
        <Company>
          Platzi<Skill>Javascript Fundamentals</Skill>
        </Company>
        <Time>2019</Time>
      </ExpWrapper>
      {show && (
        <div>
          <ExpWrapper>
            <Company>
              National Technological University of Buenos Aires
              <Skill>Video Game Developer</Skill>
            </Company>
            <Time>2018</Time>
          </ExpWrapper>
          <ExpWrapper>
            <Company>
              Postgraduate Studies Center Euroinnova
              <Skill>Web Developer</Skill>
            </Company>
            <Time>2016</Time>
          </ExpWrapper>
        </div>
      )}
    </div>
  );
}
