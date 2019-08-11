import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './Layout/DefaultTheme';

import {
  BrowserView,
  MobileView,
} from "react-device-detect";


import Loading from './_components/Loading';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <MobileView>
          <Loading/>
      </MobileView>
    </ThemeProvider>
    </>
  );
}

export default App;
