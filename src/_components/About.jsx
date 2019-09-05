import React from 'react';
import { Layout, Header, Main, Left, Center, Right, Banner, BottomMenu } from '../Layout';
import Avatar from './Avatar';

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
