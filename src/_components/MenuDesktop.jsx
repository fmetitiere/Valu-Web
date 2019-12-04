import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { MDBIcon } from 'mdbreact';

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
  width: 5%;

    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "home portfolio";
    > div{
      align-self:center;
      justify-self: center;
    }
`;

const MenuItem = Styled.div`  
  a{
    color: white;
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
				<MenuItem>
					<Link to="/">
						<MDBIcon icon="home" />
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/portfolio">
						<MDBIcon icon="images" />
					</Link>
				</MenuItem>
			</Menu>
		</MenuWrapper>
	);
}
