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



const DefaultBackground = Styled.div`
    background:red;
    height: 100vh;
    z-index:0;
`;

function Background({children}){
    return(
        <DefaultBackground><Lottie options={defaultOptions} />{children}</DefaultBackground>
    )
}

export default Background;

