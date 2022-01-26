import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub.js";
import {Link} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
    <a href="https://github.com/ChristianRossKane" target="_blank">
      <BottomNavigation className={classes.bottomNavContainer}>
        
          <BottomNavigationAction 
            icon={<GitHub />} 
            className={classes.root}
          />
      </BottomNavigation>
    </a>

    <a href="https://www.linkedin.com/in/christian-kane-845702177/" target="_blank">
      <BottomNavigation className={classes.bottomNavContainer}>
        
          <BottomNavigationAction 
            icon={<LinkedIn />} 
            className={classes.root}
          />
      </BottomNavigation>
    </a>

    <a href="https://www.instagram.com/christian.kane/" target="_blank">
      <BottomNavigation className={classes.bottomNavContainer}>
        
          <BottomNavigationAction 
            icon={<Instagram />} 
            className={classes.root}
          />
      </BottomNavigation>
    </a>
    </>
  );
};
export default Footer;
