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
    height: 100vh;
    z-index:0;
`;

function Background({children}){
    return(
        <DefaultBackground><Lottie options={defaultOptions} height={300} width={"100%"} />{children}</DefaultBackground>
    )
}

export default Background;

