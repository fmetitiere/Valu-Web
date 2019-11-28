import React from 'react';
import styled from 'styled-components';
import { Layout, Header, Main, Left, Center, MainContainer } from '../Layout';

import backgroundImage from '../images/backgroundLoading.jpg';
import BiographyText from '../_components/BiographyText';
import { MDBIcon } from 'mdbreact';

const Banner = styled.div`
	width: 100%;
	height: 8rem;
	background: url(${backgroundImage});
`;

export default function About({ ...props }) {
	return (
		<>
			<Layout noPadding>
				<Header>
					<Left>
						<MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
					</Left>
					<Center>Biography</Center>
				</Header>
				<Main noPadding>
					<Banner />
					<MainContainer>
						<BiographyText show={true} />
					</MainContainer>
				</Main>
			</Layout>
		</>
	);
}
