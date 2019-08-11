import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Styled from 'styled-components';
import ReactSVG from 'react-svg';

import IconMenu from '../../images/menu.svg'


const NavbarFlat = Styled(MDBNavbar)`
    &.navbar{
      box-shadow: none;
    }
`;

const MDBNavbarTogglerStyled = Styled(MDBNavbarToggler)`
    padding: 0.5rem !important; 
    .navbar-toggler-icon{
      background-image: none !important;
    }
    .IconMenuColor{
      svg{
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.NavBarMenuColor};
      }
    }
    
`;

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgColor = {backgroundColor: '#e91e63'}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
  
              <MDBNavbarTogglerStyled onClick={ this.onClick }>
                <img src={IconMenu}/>
              </MDBNavbarTogglerStyled>
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Options</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

class FixedNavbarTransparent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgColor = {backgroundColor: 'transparent'}
    return(
      <div>
        <Router>
          <header>
            <NavbarFlat style={bgColor} dark expand="md" scrolling fixed="top">
            
              <MDBNavbarTogglerStyled onClick={ this.onClick }>
                <ReactSVG src={IconMenu} className="IconMenuColor"/>
              </MDBNavbarTogglerStyled>
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Options</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </NavbarFlat>
          </header>
        </Router>
      </div>
    );
  }
}


function NavBar({transparent,children}){

  const NavBarComponent = transparent ? FixedNavbarTransparent : FixedNavbarExample;

  return(
    <NavBarComponent></NavBarComponent>
  )
}

export default NavBar;