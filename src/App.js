import React from 'react';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";


import Loading from './_components/Loading';

function App() {
  return (
    <>
    <MobileView>
    <Loading/>
    </MobileView>
    </>
  );
}

export default App;
