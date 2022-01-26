import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15), 
    height: theme.spacing(15),
    margin: theme.spacing(1),
    
  },
  title: {
    color: "maroon",
  },
  subtitle: {
    color: "tomato",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Christian Kane" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Christian Kane"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Texas A🙲M Aggie",
            "Computer Scientist",
            "Open to work",
          ]}
          typeSpeed={45}
          backSpeed={55}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
