import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeCardContainer = (props) => {
    const comments = props.comments
    const likes = props.likes
    return (
        <div>
         
           { props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} likes={likes} comments={comments} />).reverse()
            }
        </div>
    )
}

export default ShoeCardContainer;