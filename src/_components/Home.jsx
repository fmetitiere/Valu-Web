import React from 'react';
import {
	BrowserView,
	MobileView,
  } from "react-device-detect";
  
import NameSocial from '../_components/NameSocial';
import Sections from '../_components/Sections';
import Posts from '../_components/Posts';
import {Layout, Main, Banner } from '../Layout/';


export default function Home() {
	return (
		<>
		<MobileView>
			<Layout noHeader>
				<Main>
					<Banner/>
					<NameSocial/>
					<Sections/>
					<Posts/>
				</Main>
			</Layout>
		</MobileView>

		<BrowserView>
			<Layout>
				
			</Layout>
		</BrowserView>
		</>
	);
}
