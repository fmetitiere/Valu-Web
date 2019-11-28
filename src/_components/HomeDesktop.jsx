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
import Skills from "../_components/Skills";
import Cards from "../_components/Cards";


export default function HomeDesktop() {
  return (
    <LayoutDesktop>
      <MainDesktop grid>
        <ProfileArea>
          <Banner desktop />
          <NameSocial desktop />
          <Skills/>
        </ProfileArea>
        <PostsArea>
          <Posts desktop />
        </PostsArea>
        <BioArea>
            <Cards title="Biography" component={BiogrphyText}/>
            <Cards title="Experience" component={ExperienceText}/>
        </BioArea>
      </MainDesktop>
    </LayoutDesktop>
  );
}
