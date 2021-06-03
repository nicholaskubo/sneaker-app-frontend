import React from "react";
import UserShoeCard from "./UserShoeCard";
import Grid from '@material-ui/core/Grid'

const UserShoeCardContainer = (props) => {
  const comments = props.comments
  const likes = props.likes
  return (
    <div>
       <Grid container spacing={12}>
      {props.user_shoes ? props.user_shoes.map((s) => <UserShoeCard key={s.id} shoe={s} likes={likes} comments={comments} />).reverse() : null}
       </Grid>
    </div>
  );
};

export default UserShoeCardContainer;
