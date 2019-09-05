import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './Layout/DefaultTheme';

import Loading from './_components/Loading';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Loading/>
    </ThemeProvider>
  );
}

export default App;
