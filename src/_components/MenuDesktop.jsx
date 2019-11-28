import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const MenuWrapper = Styled.div`
    grid-area: header; 
		background: ${props => props.theme.PrimaryColor};
    box-shadow: ${props => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    height:3.5rem;
    padding: 1rem;
    top:0;
    width:100%;
    z-index:199;
`;
const Menu = Styled.div`
  width: 1170px;
  display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

const Flex = Styled.div`
  display: flex;
`;

const Logo = Styled.div`
  color: white;
  font-weight: normal;
  font-size: 1.2rem;
`;

const MenuItem = Styled.div`
  color:white;
  margin-left: 1rem;
  a{
    color: white;
    font-weight: bold;
  }
`;

export default function MenuDesktop() {
  return (
    <MenuWrapper>
      <Menu>
        <Logo>Nano<strong>Metitiere</strong></Logo>
        <Flex>
        
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/Portfolio">Portfolio</Link></MenuItem>
        </Flex>
      </Menu>
    </MenuWrapper>
  );
}
