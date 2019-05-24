
import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Aux';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(keys =>
            props.ingredients[keys] !== 0 ?
                <li key={keys}><span style={{ textTransform: 'capitalize' }}>{keys}: </span>{props.ingredients[keys]}</li>
                : null
        );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

orderSummary.propTypes = {

}

export default orderSummary
