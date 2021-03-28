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
  color: ${props => props.theme.PrimaryColor};
`;

const Skill = styled.div`
  font-weight: 400;
`;

export default function EducationText({ show }) {
  return (
    <div>
      <ExpWrapper>
        <Company>
          Universidad Siglo 21<Skill>Técnica Univ. en Marketing y Publicidad Digital</Skill>
        </Company>
        <Time>2020</Time>
      </ExpWrapper>
      {show && (
        <div>
           <ExpWrapper>
            <Company>
              Google Activate
              <Skill> HTML y CSS.Introducción al Desarrollo Web</Skill>
            </Company>
            <Time>2021</Time>
          </ExpWrapper>
          <ExpWrapper>
            <Company>
              Domestika
              <Skill> Introducción al UX Writing-Mario Ferrer</Skill>
            </Company>
            <Time>2020</Time>
          </ExpWrapper>
          <ExpWrapper>
            <Company>
              Crehana
              <Skill>-UxWriting Ux Editing</Skill>
              <Skill> -Design Research: conociendo al usuario y su entorno</Skill>
            </Company>
            <Time>2020</Time>
          </ExpWrapper>
          <ExpWrapper>
            <Company>
            Udemy
              <Skill>SEO y Posicionamiento en Google</Skill>
            </Company>
            <Time>2020</Time>
          </ExpWrapper>
          <ExpWrapper>
        <Company>
          Platzi<Skill>Curso Profesional de Google Ads</Skill>
        </Company>
        <Time>2019</Time>
      </ExpWrapper>
    
          <ExpWrapper>
            <Company>
              Centro de e-Learning UTN FRBA
              <Skill>Experto Universitario en E-Commerce y Marketing Digital</Skill>
            </Company>
            <Time>2018</Time>
          </ExpWrapper>
          <ExpWrapper>
            <Company>
            Centro de eLearning UTN FRBA
              <Skill>Mediciòn y evaluaciòn. KPI y Web Analytics</Skill>
            </Company>
            <Time>2018</Time>
          </ExpWrapper>
        </div>
      )}
    </div>
  );
}
