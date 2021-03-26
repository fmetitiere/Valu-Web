import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

import { Menu, LayoutDesktop, MainDesktop, ProfileArea, PostsArea, BioArea, Banner } from '../Layout/';
import ExperienceText from '../_components/ExperienceText';
import ArticlePage from '../_components/ArticlePage';
import BiogrphyText from '../_components/BiographyText';
import EducationText from '../_components/EducationText';
import EducationPage from '../_components/EducationPage';
import NameSocial from '../_components/NameSocial';
import Skills from '../_components/Skills';
import Cards from '../_components/Cards';




function Routes() {
	return (
		<div>
			<MobileView>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/education" component={EducationPage} />
						<Route path="/article/:name" component={ArticlePage} />
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
									<Route exact path="/">
										<Portfolio desktop />
									</Route>
									<Route path="/article/:name" component={ArticlePage} />
								</Switch>
							</PostsArea>
							<BioArea>
								<Cards title="Biography" component={BiogrphyText} />
								<Cards title="Experience" component={ExperienceText} />
								<Cards title="Education" component={EducationText} />
							</BioArea>
						</MainDesktop>
					</LayoutDesktop>
				</BrowserRouter>
			</BrowserView>
		</div>
	);
}

export default Routes;
