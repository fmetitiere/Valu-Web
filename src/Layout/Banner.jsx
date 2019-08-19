import React from 'react';
import Styled from 'styled-components';
import Lottie from 'react-lottie';

import * as animationData from '../Animations/backgroundAnim.json';
import BackgroundImage from '../_components/images/banner.png';

const defaultOptions = {
	loop: true,
	autoplay: true,
	
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};


const BaseBackground = Styled.div`
		z-index:0;
`;

const ImageBackground = Styled.div`
		z-index:0;
		background-image: url(${BackgroundImage});
    background-position: 0 -7rem;
		background-repeat: no-repeat;
`;

function DefaultBackground({children}){
    return(
        <BaseBackground>{children}</BaseBackground>
    )
}

class AnimBackground extends React.Component{
	
	componentWillMount(){
		this.setState({},_=>this.setSpeed())
		this.setState({},_=>this.setSegments())
	  }
	  setSpeed(){
		this.setState({speed: 0})
	  }
	  setSegments(){
		this.setState({segments: 0})
	  }

	  

	render(){
		return(
			<ImageBackground><Lottie  speed={0.2} options={defaultOptions} height={200} width={"100%"} />{this.props.children}</ImageBackground>
		)
	}
}

function Banner({anim, children}){

	const BackgroundComponent = anim ? AnimBackground : DefaultBackground;

	return(
		<BackgroundComponent>{children}</BackgroundComponent>
	)
}

export default Banner;

