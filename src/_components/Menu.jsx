import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { MDBIcon } from "mdbreact";

const MenuWrapper = Styled.div`
    grid-area: header; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
		background: ${props => props.theme.PrimaryColor};
    box-shadow: ${props => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    height:3.5rem;
    padding: 1rem;
    bottom:0;
    width:100%;
    div{
        justify-self: center;
        align-self: center;
    }
    i{
        color:#fff;
        font-size:1.3rem;
    }
    div:nth-child(2){
        i{
            font-size:1.5rem !important;
        }
    }
`;

export default function Menu() {
  return (
    <MenuWrapper>
      <div>
        <Link to="/">
          <MDBIcon icon="home" />
        </Link>
      </div>
      <div>
        <Link to="/portfolio">
          <MDBIcon icon="images" />
        </Link>
      </div>
      <div>
        <Link to="/about">
          <MDBIcon icon="cogs" />
        </Link>
      </div>
      <div>
        <Link to="/about">
          <MDBIcon icon="user-alt" />
        </Link>
      </div>
    </MenuWrapper>
  );
}
