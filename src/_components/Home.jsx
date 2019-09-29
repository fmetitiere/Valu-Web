import React from 'react';
import {
	BrowserView,
	MobileView,
  } from "react-device-detect";
  
import NameSocial from '../_components/NameSocial';
import LastJobs from '../_components/LastJobs';
import {Layout, Main, Banner, BottomMenu } from '../Layout/';

export default function Home() {
	return (
		<>
		<MobileView>
			<Layout noHeader>
				<Main>
					<Banner/>
					<NameSocial/>
					
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
