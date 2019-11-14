import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from '../src/_components/Routes';

import theme from './Layout/DefaultTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Routes/>
    </ThemeProvider>
  );
}

export default App;
