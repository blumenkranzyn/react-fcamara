import React from 'react';
import Routes from "./routes";
import { ThemeProvider } from '@material-ui/styles';
import themeConfig from "./styles/themeConfig"
import CssBaseline from '@material-ui/core/CssBaseline';
import {Message, Dialog} from "./components"

const App = () => (
  <ThemeProvider theme={themeConfig}>
    <CssBaseline />
    <Message />
    <Dialog />
    <Routes />
  </ThemeProvider>
);

export default App;

