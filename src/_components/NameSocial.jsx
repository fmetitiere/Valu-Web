import React from 'react';
import Styled from 'styled-components';
import { MDBIcon } from 'mdbreact';

import { H3 } from '../Layout/';

const Wrapper = Styled.div`
    width:100%;
    margin-top: 4rem;
    border-bottom: 1px solid #ddd;
`;

const InfoSocial = Styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr 1fr 1fr;
    grid-template-areas: "profession social1 social2 social3";
	height:3rem;
`;

const Profession = Styled.div`
	grid-area: profession;
	align-self: center;
	justify-self: center;
	background: ${(props) => props.theme.PrimaryColor};
	width:95%;
	text-align: center;
	font-weight: bold;
	color: white;
	border-radius: .3rem;
	padding: .2rem .3rem;
`;

const Social = Styled.div`
	align-self: center;
	justify-self: center;
	background: rgba(128, 128, 128, 0.3);
	width: 80%;
	text-align: center;
	padding: .2rem .3rem;
	border-radius: .3rem;

	a{
		text-decoration:none;
		color: unset;

		&:active, &:hover{
			color: unset;
		}
	}
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

export default function NameSocial() {
	return (
		<Wrapper>
			<H3>
				<b>Nano Metitiere</b>
			</H3>
			<InfoSocial>
				<Profession>Frontend Developer</Profession>
				<Social1>
					<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/nano.metitiere">
						<MDBIcon fab icon="facebook-square" />
					</a>
				</Social1>
				<Social2>
					<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/nano.digitalartist/">
						<MDBIcon fab icon="instagram" />
					</a>
				</Social2>
				<Social3>
					<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nano-metitiere-ba687756/">
						<MDBIcon fab icon="linkedin" />
					</a>
				</Social3>
			</InfoSocial>
		</Wrapper>
	);
}
