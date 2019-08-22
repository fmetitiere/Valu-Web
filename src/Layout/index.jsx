import Styled from 'styled-components';

import Banner from './Banner';
import BottomMenu from '../_components/BottomMenu';


function changePadding({ noPadding }) {
	return noPadding ? '0' : '1rem';
}

function OverflowHide({ overflowHide }) {
	return overflowHide ? 'hidden' : 'unset';
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

function changeBackgroundHeader({ transparent, ...props }) {
	return transparent ? 'transparent' : props.theme.NavBarMenuColor;
}

export const Header = Styled.header`
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "left center right";
    background: ${changeBackgroundHeader};
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
    overflow: ${OverflowHide};
`;

export { Banner, BottomMenu };
