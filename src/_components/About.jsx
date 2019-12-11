import React from 'react';

import { Layout, Header, Main, Left, Center, MainContainer } from '../Layout';
import BiographyText from '../_components/BiographyText';
import { MDBIcon } from 'mdbreact';
import Skills from "../_components/Skills";

export default function About({ ...props }) {
	return (
		<>
			<Layout noPadding>
				<Header>
					<Left>
						<MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
					</Left>
					<Center>Biography & Skills</Center>
				</Header>
				<Main noPadding>
					
					<MainContainer>
						<BiographyText show={true} />
               			<Skills addBottomMargin/>
					</MainContainer>
				</Main>
			</Layout>
		</>
	);
}
