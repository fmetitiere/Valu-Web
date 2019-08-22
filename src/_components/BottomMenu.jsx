import React from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components';

const MenuWrapper = Styled.div`
    grid-area: header; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: white;
    box-shadow: ${props => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    height:3.5rem;
    padding: 1rem;
    bottom:0;
    width:100%;
`;

export default function BottomMenu({Icon1, Icon2, Icon3, Icon4}){
    return (
        <MenuWrapper>
            <div>
               
            <Link to="/about">Go  →</Link>
            </div>
            <div>
                {Icon2}
            </div>
            <div>
                {Icon3}
            </div>
            <div>
                {Icon4}
            </div>
        </MenuWrapper>
    )
}