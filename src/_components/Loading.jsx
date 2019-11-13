import React from 'react';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import createHistory from 'history/createBrowserHistory';
import * as animationData from '../Animations/loading.json';
import backgroundImage from '../images/backgroundLoading.jpg';

const LottieWrapper = styled.div`
	// background: url(${backgroundImage});
	background: ${props => props.theme.PrimaryColor};
	width:100vw;
	height:100vh;
	display:flex;
	align-items: center;
`;


const history = createHistory();

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
			done: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			fetch('http://localhost:3001/')
				.then((response) => response.json())
				.then((json) => this.setState({ done: true }));
		}, 0);
	}

	render() {
		return (
			<div>
				{!this.state.done ? (
					<LottieWrapper>
						<Lottie width={500} height={500} isClickToPauseDisabled={true} options={defaultOptions} />
					</LottieWrapper>
				) : (
					<Router history={history}>
						<Routes />
					</Router>
				)}
			</div>
		);
	}
}
