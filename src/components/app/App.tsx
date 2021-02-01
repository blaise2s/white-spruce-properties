// src/components/app/App.tsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import { grey, teal, blueGrey, deepOrange } from '@material-ui/core/colors';

import Header from '../header/Header';
import Login from '../login/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal['A200']
    },
    secondary: {
      main: blueGrey[300]
    },
    warning: {
      main: deepOrange[700]
    },
    background: {
      default: grey[50]
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <main className={classes.mainContent}>
          <Route path="/login" exact component={Login} />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
