import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx'
import { useHistory, useLocation } from 'react-router-dom';

import {drawerWidth} from "../../theme/Config";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import SellIcon from '@material-ui/icons/MonetizationOn';
import BarChartIcon from '@material-ui/icons/BarChart';
import {
  dashboardCategoriesRoute, dashboardCustomersRoute,
  dashboardGeneralRoute,
  dashboardOrdersRoute, dashboardReportsRoute,
  mainBuyRoute,
  mainChatRoute,
  mainSellRoute
} from "../Routes";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

const DrawerMenu = (props) => {
  const classes = useStyles();
  const {open, handleDrawerClose} = props
  const location = useLocation();
  const history = useHistory();
  const {pathname} = location

  const handlerItemClick = (path) => {
    if(pathname !== path){
      history.push(path)
    }
  }

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button selected={pathname === mainBuyRoute} onClick={() => handlerItemClick(mainBuyRoute)}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Buy" />
            </ListItem>
            <ListItem button selected={pathname === mainSellRoute}>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary="Sell" />
            </ListItem>
            <ListItem button selected={pathname === mainChatRoute}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat"/>
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListSubheader inset>Dashboard</ListSubheader>
            <ListItem button selected={pathname === dashboardGeneralRoute} onClick={() => handlerItemClick(dashboardGeneralRoute)}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="General"/>
            </ListItem>
            <ListItem button selected={pathname === dashboardCategoriesRoute}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
            <ListItem button selected={pathname === dashboardOrdersRoute}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button selected={pathname === dashboardCustomersRoute}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button selected={pathname === dashboardReportsRoute}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
