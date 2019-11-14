import React from "react";
import styled from "styled-components";
import {
  Layout,
  Header,
  Main,
  Left,
  Center,
  P,
  MainContainer
} from "../Layout";

import backgroundImage from "../images/backgroundLoading.jpg";
import { MDBIcon } from "mdbreact";

const Banner = styled.div`
  width: 100%;
  height: 8rem;
  background: url(${backgroundImage});
`;

export default function About({ ...props }) {
  return (
    <>
      <Layout noPadding>
        <Header>
        <Left>
                <MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
            </Left>
          <Center>Biography</Center>
        </Header>

        <Main noPadding>
          <Banner />
          <MainContainer>
            <P>
              Born in Buenos Aires (Argentina), Nano began his studies in 2012 at the "First Da Vinci Multimedia School" in <strong>"Multimedia Design"</strong>.
              After two years of studies, he travels to Ecuador to specialize in <strong>"Web Development"</strong> where he acquired advanced knowledge in HTML 5 and CSS 3. <br/>He worked as a Web Multimedia Designer in Latinmanagers Ecuador and was the editor of the RACEI (Argentine Network of International Studies Centers) and TIP (Research in Paradiplomacy) magazine of Argentina. Then in 2016 he started as a <strong>Frontend
              Developer</strong> in Lop Multimedia Argentina where he perfected in
              E-Commerce Web Sites working with recognized Brands. <br/>He also
              worked as a <strong>Freelance Multimedia Designer</strong> at DEVA (ASSOCIATION OF
              ELECTRONIC SPORTS AND VIDEO GAMES OF ARGENTINA). He currently
              works in Technisys as a <strong>Senior User Interface Developer</strong> where he
              specilazed in <strong>UI Develop in React JS</strong> for Digital banking product.
            </P>
          </MainContainer>
        </Main>
      </Layout>
    </>
  );
}
