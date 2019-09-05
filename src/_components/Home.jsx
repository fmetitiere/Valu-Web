import React from 'react';

import { MainContainer, Layout, Main, Banner } from '../Layout/';

export default function Home() {
	return (
		<Layout>
			<Banner name="lalala"/>
			
			<Main>
				<MainContainer noPadding></MainContainer>
			</Main>
		</Layout>
	);
}
