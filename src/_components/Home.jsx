import React from 'react';

import { MainContainer, Layout, Header, Main, Center, Banner, BottomMenu } from '../Layout/';

export default function Home() {
	return (
		<Layout>
			<Banner />

			<Main>
				<MainContainer />
			</Main>
		</Layout>
	);
}
