import React from "react";
import UserLikesCard from "./UserLikesCard";
import Grid from '@material-ui/core/Grid'

const UserLikesCardContainer = (props) => {
  const comments = props.comments
  const likes = props.likes
  const user_shoes = props.user_shoes


  return (
    <div>
       <Grid container spacing={12}>
        {props.user_shoes ? props.user_likes.map((l) => <UserLikesCard key={user_shoes.id} shoe={user_shoes.find(s => s.id == l)} likes={likes} comments={comments} />).reverse() : null}
       </Grid>
    </div>
  );
};

export default UserLikesCardContainer;
