import React from "react";
import Styled from "styled-components";
import Lottie from "react-lottie";

import * as animationData from "../Animations/BackgroundAnimDesktop.json";
import BackgroundImage from "../images/banner.jpg";
import Avatar from "../_components/Avatar";

import { isMobile } from 'react-device-detect';


const defaultOptions = {
  loop: true,
  autoplay: true,

  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function changePosition({ desktop }) {
  return desktop ? "0rem" : "2rem";
}

const AvatarWrapper = Styled.div`
	position: absolute;
	left:0;
	right:0;
	top: 0;
`;

function changeBorderRadius({desktop}){
	return desktop ? ".5rem" : ".5rem .5rem 0 0"
}

function addBackgroundTransparent({desktop, ...props}){
  return (
    desktop ? "transparent" : props.theme.PrimaryColor
  )
}

const BackgroundWrapper = Styled.div`
		z-index:0;
		// background-image: url(${BackgroundImage});
		background: ${addBackgroundTransparent};
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height:auto;
		border-radius: ${changeBorderRadius};
		`;

class SocialAnimBackground extends React.Component {
  componentWillMount() {
    this.setState({}, _ => this.setSpeed());
    this.setState({}, _ => this.setSegments());
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
          speed={0.8}
          options={defaultOptions}
          height={isMobile && `16rem` || `12rem`}
          width={"100%"}
        />
        {this.props.children}
      </>
    );
  }
}

function Banner({ desktop, ...props }) {
  return (
      <SocialAnimBackground>
        <AvatarWrapper desktop={desktop} {...props}>
          <Avatar desktop={desktop} />
        </AvatarWrapper>
      </SocialAnimBackground>
  );
}

export default Banner;
