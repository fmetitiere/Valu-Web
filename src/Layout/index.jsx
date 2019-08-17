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
    background-color: black;
    backgriund-size: cover;
    position: fixed;
    width: 100%;
    height:4rem;
    padding: 1rem;
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

export const Footer = Styled.footer`
    grid-area: footer;
`;

export{
    Background,
}