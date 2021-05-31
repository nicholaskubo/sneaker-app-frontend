import React from "react";
import ShoeCard from "./ShoeCard";
import Grid from '@material-ui/core/Grid'

const ShoeCardContainer = (props) => {
    return (
        <div>
            <Grid>
            {props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} />).reverse()}
            </Grid>
        </div>
    )
}

export default ShoeCardContainer;