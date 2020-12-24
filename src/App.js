import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter} from "react-router-dom";

//Local
import './App.css';
import Main from './containers/Main'
import Theme from './theme/Theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Main/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
