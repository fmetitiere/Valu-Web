import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { H3 } from "../Layout";





const MenuWrapper = Styled.div`
    grid-area: header; 
		background: ${(props) => props.theme.PrimaryColor};
    box-shadow: ${(props) => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    height:3.5rem;
    padding: 1rem;
    top:0;
    width:100%;
    z-index:199;

`;
const Menu = Styled.div`
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
    width:1170px;
`;

const LinksWrapper = Styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
`;

const MenuItem = Styled.div`  
  a{
    color: white;
    margin-left:1rem;
    font-weight: bold;
    .fa, .fas {
      font-size: 1.5rem;
    }
  }
`;

export default function MenuDesktop() {
  return (
    <MenuWrapper>
      <Menu>
        <H3 center>Nano Metitiere</H3>
        <LinksWrapper>
          <MenuItem>
            <Link to="/">
              Home
					</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/portfolio">
              Portflio
					</Link>
          </MenuItem>
        </LinksWrapper>
      </Menu>
    </MenuWrapper>
  );
}
