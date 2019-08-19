import React from 'react';

import {Layout, Header, Main, Footer, Left, Center, Right, Banner} from '../Layout/';

export default function Home(){
    return(
        <>
        <Layout>
            <Header>
                <Left>Back</Left>
                <Center>Name</Center>
                <Right>Menu</Right>
            </Header>
            <Main>
                <Banner anim></Banner>

            </Main>
            <Footer Icon1="Icono1" Icon2="Icono1">
                 
            </Footer>
        </Layout>
        </>
    )
}