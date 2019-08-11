import React from 'react';
import Styled from 'styled-components';

import Lottie from 'react-lottie';
import * as animationData from '../Animations/backgroundAnim.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};


const BaseBackground = Styled.div`
    height: 100vh;
    z-index:0;
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
			<BaseBackground><Lottie  speed={0.2} options={defaultOptions} height={300} width={"100%"} />{this.props.children}</BaseBackground>
		)
	}
}

function Background({anim, children}){

	const BackgroundComponent = anim ? AnimBackground : DefaultBackground;

	return(
		<BackgroundComponent>{children}</BackgroundComponent>
	)
}

export default Background;

