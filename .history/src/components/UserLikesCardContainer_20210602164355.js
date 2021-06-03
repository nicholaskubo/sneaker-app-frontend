import React from "react";
import UserShoeCard from "./UserShoeCard";
import Grid from '@material-ui/core/Grid'

const UserLikesCardContainer = (props) => {
  const comments = props.comments
  const likes = props.likes
  const user_shoes = props.user_shoes

  console.log(user_shoes.map(s =>))
  return (
    <div>
       <Grid container spacing={12}>
        {props.user_shoes ? props.likes.map((l) => <UserShoeCard key={user_shoes.id} shoe={user_shoes.find(s => s.id == l.user_shoe_id)} likes={likes} comments={comments} />).reverse() : null}
       </Grid>
    </div>
  );
};

export default UserLikesCardContainer;
