import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import Home from './Home';

import * as animationData from '../Animations/anim1.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <Lottie options={defaultOptions}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}/>
        ) : (
          <Home/>
        )}
      </div>
    );
  }
}