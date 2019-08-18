import React from "react";
import Background from '../Layout/Background';
import Styled from 'styled-components';

export const Layout = Styled.div`
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-areas: "header" "content" "footer";
`;

export const Header = Styled.header`
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "left center right";
    background: ${props => props.theme.PrimaryColor};
    box-shadow: box-shadow: 0 4px 5px #bdbdbd;
    backgriund-size: cover;
    position: fixed;
    width: 100%;
    height:4rem;
    padding: 1rem;
    z-index: 199;
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
`;

const BaseFooter = Styled.footer`
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: ${props => props.theme.PrimaryColor};
    backgriund-size: cover;
    position: fixed;
    width: 100%;
    height:4rem;
    padding: 1rem;
    bottom:0;
`;

export function Footer({Icon1, Icon2, Icon3, Icon4}){
    return (
        <BaseFooter>
            <div>
                {Icon1}
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
    Background,
}