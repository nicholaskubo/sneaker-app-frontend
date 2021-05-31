import React from "react";
import UserShoeCard from "./UserShoeCard";
// import {Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid'

const UserShoeCardContainer = (props) => {
  return (
    <div>
       <Grid container spacing={1}>
       <Grid item xs={1}>
      {props.user_shoes ? props.user_shoes.map((s) => <UserShoeCard key={s.id} shoe={s} />).reverse() : null}
    </Grid>
    </Grid>
    </div>
  );
};

export default UserShoeCardContainer;
