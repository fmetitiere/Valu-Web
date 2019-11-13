import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';

import * as animationData from '../Animations/backgroundAnim.json';
import BackgroundImage from '../images/banner.jpg';
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
	top: 3.5rem;
`;

const BackgroundWrapper = Styled.div`
		z-index:0;
		// background-image: url(${BackgroundImage});
		background: ${props => props.theme.PrimaryColor};
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height:7.5rem;
		border-radius: .5rem .5rem 0 0;
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
			<>
				<Lottie
					isClickToPauseDisabled={true}
					speed={0.2}
					options={defaultOptions}
					height={180}
					width={'100%'}
				/>
				{this.props.children}
			</>
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
			</SocialAnimBackground>
		</BackgroundWrapper>	

	);
}

export default Banner;
