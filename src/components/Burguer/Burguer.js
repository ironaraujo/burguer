import React from 'react'
import classes from './Burguer.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = () => {
    return (
        <div className={"Burguer"}>
            <BurguerIngredient type="bread-top" />
            <BurguerIngredient type="cheese" />
            <BurguerIngredient type="meat" />
            <BurguerIngredient type="bread-bottom" />
        </div>
    )
}

export default burguer
