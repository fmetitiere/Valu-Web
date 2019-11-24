import React from "react";
import {
  LayoutDesktop,
  MainDesktop,
  ProfileArea,
  PostsArea,
  BioArea,
  Banner,
} from "../Layout/";
import ExperienceText from "../_components/ExperienceText";
import BiogrphyText from "../_components/BiographyText";
import Posts from "../_components/Posts";
import NameSocial from "../_components/NameSocial";
import Experience from "../_components/Experience";

export default function HomeDesktop() {
  return (
    <LayoutDesktop>
      <MainDesktop grid>
        <ProfileArea>
          <Banner desktop />
          <NameSocial desktop />
          <Experience/>
        </ProfileArea>
        <PostsArea>
          <Posts desktop />
        </PostsArea>
        <BioArea>
            <BiogrphyText desktop/>
            <ExperienceText desktop/>
        </BioArea>
      </MainDesktop>
    </LayoutDesktop>
  );
}
