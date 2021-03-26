import React from "react";

import NameSocial from "../_components/NameSocial";
import Sections from "../_components/Sections";
import Portfolio from "../_components/Portfolio";
import { Layout, Main, Banner } from "../Layout/";

export default function Home() {
  return (
    <Layout noHeader noPadding>
      <Main>
        <Banner />
        <NameSocial />
        <Sections />
        <Portfolio/>
      </Main>
    </Layout>
  );
}
