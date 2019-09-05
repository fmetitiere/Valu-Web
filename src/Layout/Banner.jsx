import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';
import { MDBIcon} from "mdbreact";

import * as animationData from '../Animations/backgroundAnim.json';
import BackgroundImage from '../_components/images/banner.jpg';
import Avatar from '../_components/Avatar';
import { H3 } from '../Layout/';

const defaultOptions = {
	loop: true,
	autoplay: true,

	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const AvatarWrapper = Styled.div`
	position: absolute;
	left:0;
	right:0;
	top: 3.5rem;
`;

const BackgroundWrapper = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height:7.5rem;
		border-radius: .5rem .5rem 0 0;
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
	background: ${props => props.theme.PrimaryColor};
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

class SocialAnimBackground extends React.Component {
	componentWillMount() {
		this.setState({}, (_) => this.setSpeed());
		this.setState({}, (_) => this.setSegments());
	}
	setSpeed() {
		this.setState({ speed: 0 });
	}
	setSegments() {
		this.setState({ segments: 0 });
	}

	render() {
		return (
			<div>
				<Lottie
					isClickToPauseDisabled={true}
					speed={0.2}
					options={defaultOptions}
					height={180}
					width={'100%'}
				/>
				{this.props.children}
			</div>
		);
	}
}

function Banner() {
	return (
		<BackgroundWrapper>
			<SocialAnimBackground>
				<AvatarWrapper>
					<Avatar />
				</AvatarWrapper>
					<H3>
						<b>Nano Metitiere</b>
					</H3>
					<InfoSocial>
						<Profession>
							Frontend Developer
						</Profession>
						<Social1>
							<a target="_blank" href="https://www.facebook.com/nano.metitiere">
							<MDBIcon fab icon="facebook-square" />
							</a>
						</Social1>
						<Social2>
							<a target="_blank" href="https://www.instagram.com/nano.digitalartist/">
							<MDBIcon fab icon="instagram" />
							</a>
						</Social2>
						<Social3>
							<a target="_blank" href="https://www.linkedin.com/in/nano-metitiere-ba687756/">
							<MDBIcon fab icon="linkedin" />
							</a>
						</Social3>
						
					</InfoSocial>
				
			</SocialAnimBackground>
		</BackgroundWrapper>
	);
}

export default Banner;
