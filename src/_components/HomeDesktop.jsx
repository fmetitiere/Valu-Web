import React from "react";
import {
  LayoutDesktop,
  MainDesktop,
  ProfileArea,
  PostsArea,
  BioArea,
  Banner,
} from "../Layout/";
import BiogrphyText from "../_components/BiographyText";

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
            <BiogrphyText desktop/>
        </BioArea>
      </MainDesktop>
    </LayoutDesktop>
  );
}
