import React from "react";
import ShoeCard from "./ShoeCard";
import Grid from '@material-ui/core/Grid'

const ShoeCardContainer = (props) => {
    return (
        <div>
            <Grid container spacing={12}>
            <Grid item xs ={6}>
            {props.user_shoes.map(s => <ShoeCard key={s.id} shoe={s} />).reverse()}
            </Grid>
            </Grid>
        </div>
    )
}

export default ShoeCardContainer;