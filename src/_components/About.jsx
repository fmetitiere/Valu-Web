import React from 'react';
import {MainContainer, Layout, Header, Main, Footer, Left, Center, Right, Banner} from '../Layout';
import Avatar from './Avatar'

export default function Home(){
    return(
        <>
        <Layout>
            <Header>
                <Center><Avatar></Avatar></Center>
            </Header>
            <Banner anim></Banner>
            <Main>
               
            </Main>
            <Footer Icon1="Icono1" Icon2="Icono1">
                 
            </Footer>
        </Layout>
        </>
    )
}