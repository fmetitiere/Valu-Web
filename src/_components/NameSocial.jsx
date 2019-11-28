import React from 'react';
import Styled from 'styled-components';

import NameSocialText from '../_components/NameSocialText';
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
    grid-gap: 1rem;
  height:3rem;
  a{
    width: 100%;
		text-decoration:none;
    color: unset;
    align-self: center;
    justify-self: center;
		&:active, &:hover{
			color: unset;
		}
	}
`;
const InfoSocialDesktop = Styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "social1 social2 social3";
  grid-gap: 1rem;
  height:3rem;
  margin-bottom: .5rem;
  a{
    width: 100%;
		text-decoration:none;
    color: unset;
    align-self: center;
    justify-self: center;
		&:active, &:hover{
			color: unset;
		}
	}
`;

function changeWidth({ lessFive, lessTwenty }) {
	return (lessFive && '95%') || '100%';
}

const Profession = Styled.div`
	grid-area: profession;
	align-self: center;
	justify-self: center;
	background: ${(props) => props.theme.PrimaryColor};
	width:${changeWidth};
	text-align: center;
	font-weight: bold;
	color: white;
	border-radius: .3rem;
	padding: .2rem .3rem;
`;



export default function NameSocial({ desktop }) {
	return (
		<Wrapper>
			<H3>
				<b>Nano Metitiere</b>
			</H3>
			{desktop ? (
				<>
					<Profession>UX UI Developer</Profession>
					<InfoSocialDesktop>
						<NameSocialText/>
					</InfoSocialDesktop>
				</>
			) : (
				<InfoSocial>
					<Profession>UX UI Developer</Profession>
					<NameSocialText/>
				</InfoSocial>
			)}
		</Wrapper>
	);
}
