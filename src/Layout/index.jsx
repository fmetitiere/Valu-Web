import React from "react";
import { Link } from "react-router-dom";
import Banner from './Banner';
import Styled from 'styled-components';

function changePadding({noPadding}){
    return noPadding ? "0" : "1rem";
}

export const MainContainer = Styled.div`
    padding: ${changePadding};
    width:100%;
`;

export const Layout = Styled.div`
    height: 100vh;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-areas: "header" "content" "footer";
    width: 100vw;
    background-color: rgba(38, 59, 164, 0.1);
`;

export const Header = Styled.header`
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "left center right";
    background: transparent;
    position: fixed;
    width: 100%;
    height:4rem;
    width: 100vw;
    z-index: 1999;
`;

export const Left = Styled.div`
    grid-area: left;
    margin: auto;
    align-self: center;
`;
export const Center = Styled.div`
    grid-area: center;
    margin: auto;
    align-self: center;
`;
export const Right = Styled.div`
    grid-area: right;
    margin: auto;
    align-self: center;
`;

export const Main = Styled.div`
    grid-area: content;
    width: 100vw;
    display:flex;
    align-items:center;
`;

const BaseFooter = Styled.footer`
    grid-area: header; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: white;
    box-shadow: ${props => props.theme.Shadows};
    backgriund-size: cover;
    position: fixed;
    left:0;
    right:0;
    margin: 0 auto;
    height:3.5rem;
    padding: 1rem;
    bottom:0;
    width: 95%;
    border-radius: 1rem 1rem 0 0;
`;

export function Footer({Icon1, Icon2, Icon3, Icon4}){
    return (
        <BaseFooter>
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
        </BaseFooter>
    )
}

export{
    Banner,
}