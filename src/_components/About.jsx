import React from 'react';
import { Layout, Header, Main, BottomMenu } from '../Layout';

export default function Home() {
	return (
        <>
		<Layout noPadding>
			<Header />

			<Main />
		</Layout>
        <BottomMenu Icon1="Icono1" Icon2="Icono1" />
        </>
	);
}
