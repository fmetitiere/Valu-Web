import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { MDBIcon } from 'mdbreact';
import { P } from "../Layout/";


const MenuWrapper = Styled.div`
    grid-area: header; 
		background: ${(props) => props.theme.PrimaryColor};
    box-shadow: ${(props) => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    height:3.5rem;
    padding: 1rem;
    top:0;
    width: 100%;
    z-index:199;
    display:flex;
    justify-content:center;

`;
const Menu = Styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;

`;
const Container = Styled.div`
width: 1170px;
display:flex;
    justify-content:space-between;
`;



const MenuItem = Styled.div`  
  a{
    color: white;
    margin-right:1rem;
    font-weight: 400;
    .fa, .fas {
      font-size: 1rem;
    }
  }
`;

export default function MenuDesktop() {
	return (
		<MenuWrapper>
      <Container>
      <P bold contrast>
        Valu  Tenaglia
      </P>
			<Menu>
				<MenuItem>
					<Link to="/">
						Home
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/portfolio">
						Portfolio
					</Link>
				</MenuItem>
			</Menu>
      </Container>
		</MenuWrapper>
	);
}
