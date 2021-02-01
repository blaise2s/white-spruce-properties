// src/components/side-menu/SideMenu.tsx;
import React, { KeyboardEvent, MouseEvent } from 'react';
import {
  createStyles,
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  Divider
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface SideDrawerProps {
  isOpen: boolean;
  toggle: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: '10rem'
    }
  })
);

const DrawerList = () => (
  <div>
    <List>
      <Link to="/">
        <ListItem button>Home</ListItem>
      </Link>
      <ListItem button>Properties</ListItem>
      <ListItem button>About</ListItem>
      <ListItem button>Contact</ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>Resources</ListItem>
    </List>
  </div>
);

const SideDrawer = (props: SideDrawerProps) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="left"
      open={props.isOpen}
      onClose={props.toggle(false)}
      onOpen={props.toggle(true)}
    >
      <div className={classes.drawer}>
        <DrawerList />
      </div>
    </SwipeableDrawer>
  );
};

export default SideDrawer;
