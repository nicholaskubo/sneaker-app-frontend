import React from "react";
import ShoeCard from "./ShoeCard";
import Grid from '@material-ui/core/Grid'

const ShoeCardContainer = (props) => {
    return (
        <div>
            {props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} />).reverse()}
        </div>
    )
}

export default ShoeCardContainer;