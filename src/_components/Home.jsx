import React from 'react';

import Slider from '../_components/Slider';
import { MainContainer, Layout, Header, Main, Center, Banner, BottomMenu } from '../Layout/';
import BackgroundImage from '../_components/images/banner.png';
import Avatar from '../_components/Avatar';

export default function Home() {
	return (
		<Layout>
			<Header transparent>
				<Center>
					<Avatar />
				</Center>
				<Banner anim />
			</Header>
			<Main overflowHide>
				<MainContainer noPadding>
					<Slider image1={BackgroundImage} title1="Imagen 1" image2={BackgroundImage} title2="Imagen 2" />
				</MainContainer>
			</Main>
			<BottomMenu Icon1="Icono1" Icon2="Icono1" />
		</Layout>
	);
}
