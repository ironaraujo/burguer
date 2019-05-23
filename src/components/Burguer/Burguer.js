import React from 'react'
import './Burguer.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            console.log(igKey);
            return <BurguerIngredient key={igKey+i} type={igKey} />
        })
    }).reduce((arr,el)=>arr.concat(el),[]);
    
    if(transformedIngredients.length===0){
        transformedIngredients = <p>Adicione Ingredientes ao seu Hamburguer</p>;
    }
    return (
        <div className={"Burguer"}>
            <BurguerIngredient type="BreadTop" />
            {transformedIngredients}
            <BurguerIngredient type="BreadBottom" />
        </div>
    )
}

export default burguer
