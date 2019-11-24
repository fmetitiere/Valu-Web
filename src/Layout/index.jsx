import React from 'react';
import Styled from 'styled-components';

import Banner from './Banner';
import Menu from '../_components/Menu';
import MenuDesktop from '../_components/MenuDesktop';

export { Banner, Menu, MenuDesktop };

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
    padding: ${changePadding};
    margin: 0;
    display: grid;
    grid-template-rows: 4rem auto 4rem;
    grid-template-areas: "header" "content" "footer";
    width: 100%;
    height: 100%;
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

export function Layout({ noHeader, children, ...props }) {
	const LayoutComponent = noHeader ? NoHeaderLayout : DefaultLayout;

	return <LayoutComponent {...props}>{children}</LayoutComponent>;
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
    .fa-arrow-left:before {
        color: white;
    }
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
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff;
`;
export const Right = Styled.div`
    grid-area: right;
    margin: auto;
    align-self: center;
`;

function changeAlingItems({ center }) {
	return center ? 'center' : 'flex-start';
}

export const Main = Styled.div`
    grid-area: content;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:${changeAlingItems};
    overflow: ${OverflowHide};
    padding: ${changePadding};
`;

function changeTextAlign({ left }) {
	return (left && 'left') || 'center';
}

function changeMargin({ noMarginTop }) {
	return (noMarginTop && '0 0 1rem') || '1rem 0';
}

export const H3 = Styled.h3`
    font-size: 1.75rem;
    text-align: ${changeTextAlign};
    margin: ${changeMargin};
    font-weight:bold;
`;
export const H5 = Styled.h5`
    font-size: 1.25rem;
    padding:0;
    margin:0;
`;

export const P = Styled.p`
    font-size: 1rem;
    padding:0;
    margin:0;
    text-align: justify;
`;

export const SMALL = Styled.small`
    font-size: .875rem;
    color: ${(props) => props.theme.NavBarMenuColor};
`;

export const LayoutDesktop = Styled.div`
    display:grid;
    grid-template-rows: 3.5rem auto;
    grid-template-areas: "header" "content";
    width: 100%;
    height: 100%;
    background: rgba(224, 224, 224, 0.2);
`;

export const MainDesktop = Styled.div`
    grid-area: content;
    display: grid;
    grid-template-columns: 2fr 5fr 3fr;
    grid-template-areas: "profile posts bio";
    width: 1170px;
    margin: 0 auto;
    background: white;
`;

export const ProfileArea = Styled.div`
    grid-area: profile;
    position: relative;
    padding: 1rem 0 0 1rem;
`;
export const PostsArea = Styled.div`
    grid-area: posts;
    padding: 0 1rem;
`;
export const BioArea = Styled.div`
    grid-area: bio;
    padding: 1rem 1rem 0 0;
`;

function BackgroundColor({ blue, ...props }) {
	return blue ? props.theme.PrimaryColor : 'white';
}
function changeFontColor({ whiteFont }) {
	return whiteFont ? 'white' : '#68b7f0';
}

export const Button = Styled.button`
    background: ${BackgroundColor};
    border: 0;
    width: 100%;
    margin: .5rem 0;
    border: .1rem solid #68b7f0;
    padding: .3rem;
    color: ${changeFontColor};
    font-weight: bold;
    border-radius: .5rem;
    outline:0;
    transition: .5s ease-out;
    &:hover{
        color: #fff;
        background: ${(props) => props.theme.PrimaryColor};
        border: .1rem solid #fff;
        transition: .5s ease-in;
        outline:0;
    }
    &:active, &:focus{
        outline:0;
    }
`;

export const Card = Styled.div`
box-shadow: 0 0 10px rgba(0,0,0,0.2);
padding: 1rem;
border-radius: .5rem;
margin-bottom: 1rem;
  .show {
    animation-duration: 1s;
    animation-name: slidein;
  @keyframes slidein {
    from {
      opacity:0
    }
    to {
      opacity: 1;
    }
  }

  }
`;
