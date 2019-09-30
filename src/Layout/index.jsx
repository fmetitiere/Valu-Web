import React from 'react';
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

export const FlexContainer = Styled.div`
    padding: ${changePadding};
    width:100%;
    display: flex;
    justify-content: space-around;
`;

const DefaultLayout = Styled.div`
    overflow: ${OverflowHide};
    height: 100%;
    padding: ${changePadding};
    margin: 0;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-areas: "header" "content" "footer";
    width: 100%;
`;

const NoHeaderLayout = Styled.div`
    overflow: ${OverflowHide};
    height: 100%;
    padding: ${changePadding};
    margin: 0;
    display: grid;
    grid-template-rows: auto 4rem;
    grid-template-areas: "content" "footer";
    width: 100%;
`;

export function Layout({noHeader, children, ...props}){
    const LayoutComponent = noHeader ? NoHeaderLayout : DefaultLayout;

    return(
        <LayoutComponent {...props}>
            {children}
        </LayoutComponent>
    )
}

function changeBackgroundHeader({ transparent, ...props }) {
	return transparent ? 'transparent' : props.theme.PrimaryColor;
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

function changeAlingItems({center}){
    return center ? "center" : "flex-start";
}

export const Main = Styled.div`
    grid-area: content;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:${changeAlingItems};
    overflow: ${OverflowHide};
`;

export const H3 = Styled.h3`
    font-size: 1.75rem;
    text-align: center;
    margin: 1rem 0;
    font-weight:bold;
`;
export const H5 = Styled.h5`
    font-size: 1.25rem;
    padding:0;
    margin:0;
`;

export const SMALL = Styled.small`
    font-size: .875rem;
    color: ${props => props.theme.NavBarMenuColor};
`;

export { Banner, BottomMenu };
