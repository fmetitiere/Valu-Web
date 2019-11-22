import React from "react";
import {
  LayoutDesktop,
  MainDesktop,
  ProfileArea,
  PostsArea,
  BioArea,
  Banner,
  H3,
  P
} from "../Layout/";

import Posts from "../_components/Posts";
import NameSocial from "../_components/NameSocial";

export default function HomeDesktop() {
  return (
    <LayoutDesktop>
      <MainDesktop>
        <ProfileArea>
          <Banner desktop />
          <NameSocial desktop />
        </ProfileArea>
        <PostsArea>
          <Posts desktop />
        </PostsArea>
        <BioArea>
          <H3 left>Biography</H3>
          <P>
            Born in Buenos Aires (Argentina), Nano began his studies in 2012 at
            the "First Da Vinci Multimedia School" in{" "}
            <strong>"Multimedia Design"</strong>. After two years of studies, he
            travels to Ecuador to specialize in{" "}
            <strong>"Web Development"</strong> where he acquired advanced
            knowledge in HTML 5 and CSS 3. <br />
            He worked as a Web Multimedia Designer in Latinmanagers Ecuador and
            was the editor of the RACEI (Argentine Network of International
            Studies Centers) and TIP (Research in Paradiplomacy) magazine of
            Argentina. Then in 2016 he started as a{" "}
            <strong>Frontend Developer</strong> in Lop Multimedia Argentina
            where he perfected in E-Commerce Web Sites working with recognized
            Brands. <br />
            He also worked as a <strong>
              Freelance Multimedia Designer
            </strong>{" "}
            at DEVA (ASSOCIATION OF ELECTRONIC SPORTS AND VIDEO GAMES OF
            ARGENTINA). He currently works in Technisys as a{" "}
            <strong>Senior User Interface Developer</strong> where he specilazed
            in <strong>UI Develop in React JS</strong> for Digital banking
            product.
          </P>
        </BioArea>
      </MainDesktop>
    </LayoutDesktop>
  );
}
