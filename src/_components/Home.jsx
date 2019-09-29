import React from 'react';
import {
	BrowserView,
	MobileView,
  } from "react-device-detect";
  
import NameSocial from '../_components/NameSocial';
import Sections from '../_components/Sections';
import Posts from '../_components/Posts';
import {Layout, Main, Banner, BottomMenu } from '../Layout/';


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
			<BottomMenu Icon1="Icono1" Icon2="Icono1" />
		</MobileView>

		<BrowserView>
			<Layout>
				
			</Layout>
		</BrowserView>
		</>
	);
}
