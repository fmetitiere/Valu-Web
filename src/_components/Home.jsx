import React from 'react';
import NavBar from './_modules/navBar';

import Background from '../Layout/Background'

export default function Home(){
    return(
        <>
            <Background anim>
                <NavBar transparent/>
            </Background>  
        </>
    )
}