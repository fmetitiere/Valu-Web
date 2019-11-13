import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import classnames from "classnames";
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
        color:#ccc;
        font-size:1.3rem;

    }
    div:nth-child(2){
        i{
            font-size:1.5rem !important;
        }
    }
    .current{
        i{
            color: ${props => props.theme.NavBarMenuColor};
        }
        
    }
    .current2{
      i{
          color: ${props => props.theme.NavBarMenuColor};
      }
      
  }
   
`;

export default function BottomMenu({ current, current2, current3, current4 }) {
  return (
    <MenuWrapper>
      <div>
        <Link className={classnames({ current })} to="/">
          <MDBIcon icon="home" />
        </Link>
      </div>
      <div>
        <Link className={classnames({ current2 })} to="/portfolio">
          <MDBIcon far icon="image" />
        </Link>
      </div>
      <div>
        <Link className={classnames({ current3 })} to="/about">
          <MDBIcon icon="user-alt" />
        </Link>
      </div>
      <div>
        <Link className={classnames({ current4 })} to="/about">
          <MDBIcon icon="cogs" />
        </Link>
      </div>
    </MenuWrapper>
  );
}
