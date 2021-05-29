import React from "react";
import UserShoeCard from "./UserShoeCard";
// import {Paper} from "@material-ui/core";

const UserShoeCardContainer = (props) => {
  return (
    <div>
      {props.user_shoes ? props.user_shoes.reverse().map((s) => <UserShoeCard key={s.id} shoe={s} />) : null}
    </div>
  );
};

export default UserShoeCardContainer;
