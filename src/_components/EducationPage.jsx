import React from 'react';

import { Layout, Header, Left, Center, Main } from '../Layout';
import { MDBIcon } from 'mdbreact';
import EducationText from '../_components/EducationText';

export default function EducationsPage(props) {
	return (
		<Layout noPadding>
			<Header>
				<Left>
					<MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
				</Left>
				<Center>Education</Center>
			</Header>
			<Main>
                <EducationText show={true}/>
            </Main>
		</Layout>
	);
}
