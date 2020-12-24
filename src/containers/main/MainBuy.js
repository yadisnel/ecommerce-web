import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FullCard from "../../components/FullCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

const MainBuy = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="left" spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <Grid key={value} item>
              <FullCard/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainBuy;
