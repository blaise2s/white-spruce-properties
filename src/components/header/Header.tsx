// src/components/header/Header.tsx
import React, { useState, KeyboardEvent, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
  SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SideDrawer from '../side-drawer/SideDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '10rem'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          <Link to="/">White Spruce Properties</Link>
        </Typography>
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
      <SideDrawer isOpen={isDrawerOpen} toggle={toggleDrawer} />
    </AppBar>
  );
};

export default Header;
