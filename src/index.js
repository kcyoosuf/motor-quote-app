import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import Approutes from './routes/';
import store from "./data/store"


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Approutes />
      <CssBaseline />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)