import React from "react";

import NameSocial from "../_components/NameSocial";
import Sections from "../_components/Sections";
import Posts from "../_components/Posts";
import { Layout, Main, Banner } from "../Layout/";

export default function Home() {
  return (
    <Layout noHeader noPadding>
      <Main>
        <Banner />
        <NameSocial />
        <Sections />
        <Posts />
      </Main>
    </Layout>
  );
}
