import React from 'react';


import { MainContainer, Layout, Header, Main, Center, Banner, BottomMenu } from '../Layout/';


export default function Home() {
	return (
		<Layout>
			<Header transparent>
				<Banner social/>
			</Header>
			<Main >
				<MainContainer >
					
				</MainContainer>
			</Main>
			<BottomMenu Icon1="Icono1" Icon2="Icono1" />
		</Layout>
	);
}
