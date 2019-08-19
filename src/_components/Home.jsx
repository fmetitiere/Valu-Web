import React from 'react';

import Slider from '../_components/Slider';
import {MainContainer, Layout, Header, Main, Footer, Left, Center, Right, Banner} from '../Layout/';
import BackgroundImage from '../_components/images/banner.png';
import Avatar from '../_components/Avatar'

export default function Home(){
    return(
        <>
        <Layout>
            <Header>
                <Center><Avatar></Avatar></Center>
            </Header>
            <Main>
                <Banner anim></Banner>
                <MainContainer>
                    <Slider 
                        image1={BackgroundImage}
                        title1="Imagen 1"
                        
                        image2={BackgroundImage}
                        title2="Imagen 2"/>
                </MainContainer>    
            </Main>
            <Footer Icon1="Icono1" Icon2="Icono1">
                 
            </Footer>
        </Layout>
        </>
    )
}