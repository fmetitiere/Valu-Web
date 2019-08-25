import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';

import * as animationData from '../Animations/backgroundAnim.json';
import BackgroundImage from '../_components/images/banner.png';
import Avatar from '../_components/Avatar';

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
	left:10px;
	top: -2.5rem;
	background:white;
	border-radius: .5rem;
	padding: .2rem;
	div{
		div {
			width: 70px !important;
			height: 70px !important;
			border-radius: .5rem !important;
		}
	} 
`;

const SocialBackgroundWrapper = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
		background-position: 0 0rem;
		background-repeat: no-repeat;
		position: absolute;
		top:0;
		width: 100%;
		height:12rem;
		`;

const SocialContent = Styled.div`
		background: white;
		height:6rem;
		position: absolute;
		bottom: -2.5rem;
		width: 100%;
		display:grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		
		div{
			align-self: end;
			justify-self: center;
		}
	`;

const BaseBackground = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
    	background-position: 0 0rem;
		background-repeat: no-repeat;
		position: absolute;
		top:0;
		width: 100%;
		height:12rem;
`;

const ImageBackground = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
    	background-position: 0 0rem;
		background-repeat: no-repeat;
		position: absolute;
		top:0;
		width: 100%;
`;

function SocialBackground({ children }) {
	return (
		<SocialBackgroundWrapper>
			<SocialContent>
			<AvatarWrapper>
				<Avatar />
			</AvatarWrapper>
				<div>
					<p>About</p>
				</div>
				<div>
					<p>About</p>
				</div>
				<div>
					<p>About</p>
				</div>
				<div>
					<p>About</p>
				</div>
			</SocialContent>
		</SocialBackgroundWrapper>
	);
}

function DefaultBackground({ children }) {
	return <BaseBackground>{children}</BaseBackground>;
}

class AnimBackground extends React.Component {
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
			<ImageBackground>
				<Lottie
					isClickToPauseDisabled={true}
					speed={0.2}
					options={defaultOptions}
					height={180}
					width={'100%'}
				/>
				{this.props.children}
			</ImageBackground>
		);
	}
}

function Banner({ social, anim, children }) {
	if (anim) {
		return <AnimBackground>{children}</AnimBackground>;
	} else if (social) {
		return <SocialBackground>{children}</SocialBackground>;
	} else {
		return <DefaultBackground>{children}</DefaultBackground>;
	}
}

export default Banner;
