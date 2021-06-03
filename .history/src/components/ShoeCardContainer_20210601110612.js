import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeCardContainer = (props) => {
    comments = props.comments
    return (
        <div>
         
           { props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} comments={comments} />).reverse()
            }
        </div>
    )
}

export default ShoeCardContainer;