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

function AnimBackground({children}){
	
    return(
        <BaseBackground><Lottie options={defaultOptions} height={300} width={"100%"} />{children}</BaseBackground>
    )
}

function Background({anim, children}){

	const BackgroundComponent = anim ? AnimBackground : DefaultBackground;

	return(
		<BackgroundComponent>{children}</BackgroundComponent>
	)
}

export default Background;

