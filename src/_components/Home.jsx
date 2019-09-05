import React from 'react';
import {
	BrowserView,
	MobileView,
  } from "react-device-detect";
  

import { MainContainer, Layout, Main, Banner, BottomMenu } from '../Layout/';

export default function Home() {
	return (
		<>
		<MobileView>
			<Layout>
				<Banner/>
				<Main>
					<MainContainer noPadding>
					</MainContainer>
				</Main>
			</Layout>
			<BottomMenu Icon1="Icono1" Icon2="Icono1" />
		</MobileView>

		<BrowserView>
			<Layout>
				<Banner/>
				<Main>
					<MainContainer noPadding>
					</MainContainer>
				</Main>
			</Layout>
			
		</BrowserView>
		</>
	);
}
