import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import About from './About';

const PageContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
`;

const Routes = () => {
	return (
		<div>
			<Router>
				<Route
					render={({ location }) => {
						return (
							<Switch location={location}>
								<Route exact path="/about" component={About} />
								<Route exact path="/" component={Home} />
							</Switch>
						);
					}}
				/>
			</Router>
		</div>
	);
};

export default Routes;
