import React from 'react';
import {Layout, Header, Main, Left, Center, Right, Banner, BottomMenu} from '../Layout';
import Avatar from './Avatar'

export default function Home(){
    return(
        <>
        <Layout>
            <Header>
                <Center><Avatar></Avatar></Center>
            </Header>
            <Banner></Banner>
            <Main>
               
            </Main>
            <BottomMenu Icon1="Icono1" Icon2="Icono1">
                 
            </BottomMenu>
        </Layout>
        </>
    )
}