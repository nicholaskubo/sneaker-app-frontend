import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeCardContainer = (props) => {
    return (
        <div>
            {comments = props.comments}
           { props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} comments={comments} />).reverse()
            }
        </div>
    )
}

export default ShoeCardContainer;