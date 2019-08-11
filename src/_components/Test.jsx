import lottie from "lottie-web";

const ReactDOM = require("react-dom");
const React = require("react");

const animationData = require("../Animations/anim1.json");
const playAnimationData = require("../Animations/backgroundAnim.json");

class LottieToggleIcon extends React.Component {
  componentDidMount() {
    const { animationData, rendererSettings = {} } = this.props;

    this.setState(
      {
        options: {
          container: this.el,
          renderer: "svg",
          loop: false,
          autoplay: false,
          segments: true,
          animationData,
          rendererSettings
        },
        hasChanged: false
      },
      () => {
        this.anim = lottie.loadAnimation(this.state.options);
        this.playSegments();
      }
    );
  }

  getSegments(props = this.props) {
    const animationData = this.props.animationData;
    const {
      startFrame = animationData.ip,
      endFrame = animationData.op,
      direction
    } = props;
    const segments = [];
    const forward = direction > 0;

    if (this.state.hasChanged) {
      segments[0] = !forward ? startFrame : endFrame;
      segments[1] = !forward ? endFrame : startFrame;
    } else {
      segments[0] = forward ? startFrame + 1 : endFrame - 1;
      segments[1] = forward ? startFrame : endFrame;
    }

    return segments;
  }

  playSegments() {
    const segments = this.getSegments();
    this.anim.playSegments(segments, true);
  }

  componentDidUpdate(nextProps, nextState) {
    if (
      this.props.direction !== nextProps.direction ||
      this.props.startFrame !== nextProps.startFrame ||
      this.props.endFrame !== nextProps.endFrame
    ) {
      if (!this.state.hasChanged) {
        this.setState(
          {
            hasChanged: true
          },
          () => {
            this.playSegments();
          }
        );
      } else {
        this.playSegments();
      }
    }
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}

class Tester extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: -1
    };
  }

  toggleDirection = () => {
    const nextDirection = this.state.direction < 0 ? 2 : -2;
    this.setState({
      direction: nextDirection
    });
  };

  render() {
    const { direction } = this.state;
    return (
      <div>
        <LottieToggleIcon
          animationData={playAnimationData}
          direction={direction}
        />
        <a onClick={this.toggleDirection}>
        <LottieToggleIcon animationData={animationData} direction={direction} />
        </a>
      </div>
    );
  }
}

export default Tester;


