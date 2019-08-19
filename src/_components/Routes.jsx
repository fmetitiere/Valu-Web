import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
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
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
    </Router>
    </div>
  )
}

export default Routes