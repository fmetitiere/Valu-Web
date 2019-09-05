import React from 'react';

import { MainContainer, Layout, Main, Banner, BottomMenu } from '../Layout/';

export default function Home() {
	return (
		<>
		<Layout>
			<Banner name="lalala"/>
			
			<Main>
				<MainContainer noPadding></MainContainer>
			</Main>
			
		</Layout>
		<BottomMenu Icon1="Icono1" Icon2="Icono1" />
		</>
	);
}
