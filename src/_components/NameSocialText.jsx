import React from 'react';
import Styled from 'styled-components';
import { MDBIcon } from 'mdbreact';


const Social = Styled.div`
	align-self: center;
	justify-self: center;
	background: rgba(128, 128, 128, 0.1);
	width: 100%;
	text-align: center;
	padding: .2rem .3rem;
	border-radius: .3rem;
`;

const Social1 = Styled(Social)`
	grid-area: social1;
`;
const Social2 = Styled(Social)`
	grid-area: social2;
`;
const Social3 = Styled(Social)`
	grid-area: social3;
`;

export default function NameSocialText() {
	return (
		<>
			<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/nano.metitiere">
				<Social1>
					<MDBIcon fab icon="facebook-square" />
				</Social1>
			</a>
			<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/nano.uideveloper/">
				<Social2>
					<MDBIcon fab icon="instagram" />
				</Social2>
			</a>
			<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fernando-metitiere/">
				<Social3>
					<MDBIcon fab icon="linkedin" />
				</Social3>
			</a>
		</>
	);
}
