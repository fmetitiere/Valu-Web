import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from '../Animations/loading.json';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
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
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => this.setState({ done: true }));
		}, 1500);
	}

	render() {
		return <div>{!this.state.done ? <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> : <Home />}</div>;
	}
}
