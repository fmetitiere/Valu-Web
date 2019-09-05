import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';

import * as animationData from '../Animations/backgroundAnim.json';
import BackgroundImage from '../_components/images/banner.jpg';
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
	left:0;
	right:0;
	top: 3rem;
`;

const BackgroundWrapper = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height:7.5rem;
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

function BannerBackground() {
	return (
		<BackgroundWrapper>
			<SocialAnimBackground>
				<AvatarWrapper>
					<Avatar />
				</AvatarWrapper>
			</SocialAnimBackground>
		</BackgroundWrapper>
	);
}

function Banner({ children }) {
	return <BannerBackground>{children}</BannerBackground>;
}

export default Banner;
