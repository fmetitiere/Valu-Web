import React from 'react';

import { Layout, Header, Left, Center, Main } from '../Layout/';
import { MDBIcon } from 'mdbreact';
import Skills from "../_components/Skills";

export default function SkillsPage(props) {
	return (
		<Layout noPadding>
			<Header>
				<Left>
					<MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
				</Left>
				<Center>Skills</Center>
			</Header>
			<Main>
                <Skills/>
            </Main>
		</Layout>
	);
}
