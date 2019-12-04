import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import { Menu, MenuDesktop } from '../Layout';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

import { LayoutDesktop, MainDesktop, ProfileArea, PostsArea, BioArea, Banner } from '../Layout/';
import ExperienceText from '../_components/ExperienceText';
import BiogrphyText from '../_components/BiographyText';
import NameSocial from '../_components/NameSocial';
import Skills from '../_components/Skills';
import Cards from '../_components/Cards';

import HomeDesktop from './HomeDesktop';

function Routes() {
	return (
		<div>
			<MobileView>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
					</Switch>
					<Menu />
				</BrowserRouter>
			</MobileView>

			<BrowserView>
				<BrowserRouter>
					<LayoutDesktop>
						<MainDesktop grid>
							<ProfileArea>
								<Banner desktop />
								<NameSocial desktop />
								<Skills />
							</ProfileArea>
							<PostsArea>
								<Switch>
									<Route exact path="/" component={HomeDesktop} />
									<Route exact path="/portfolio">
										<Portfolio desktop />
									</Route>
								</Switch>
							</PostsArea>
							<BioArea>
								<Cards title="Biography" component={BiogrphyText} />
								<Cards title="Experience" component={ExperienceText} />
							</BioArea>
						</MainDesktop>
						<MenuDesktop />
					</LayoutDesktop>
				</BrowserRouter>
			</BrowserView>
		</div>
	);
}

export default Routes;
