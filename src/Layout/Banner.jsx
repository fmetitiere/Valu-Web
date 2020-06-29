import React from "react";
import Styled from "styled-components";
import Lottie from "react-lottie";

import * as animationData from "../Animations/BackgroundAnimDesktop.json";
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

const AvatarWrapper = Styled.div`
	position: absolute;
	left:0;
	right:0;
	top: 0;
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
          height={isMobile ? `16rem` : `12rem`}
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
