import React from 'react';
import { Layout, Header, Main, BottomMenu } from '../Layout';

export default function Home({...props}) {
	return (
        <>
		<Layout noPadding>
			<Header>
			<button onClick={() => props.history.goBack()}>Back</button>
			</Header>
			
			<Main />
		</Layout>
        <BottomMenu Icon1="Icono1" Icon2="Icono1" />
        </>
	);
}
