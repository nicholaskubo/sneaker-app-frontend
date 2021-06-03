import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeCardContainer = (props) => {
    commentss = props.comments
    return (
        <div>
         
           { props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} comments={commentss} />).reverse()
            }
        </div>
    )
}

export default ShoeCardContainer;