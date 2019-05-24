import React, { Component, useEffect } from 'react';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
}


class BurguerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                Salad: 0,
                Bacon: 0,
                Cheese: 0,
                Meat: 0,
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
        }
    }

    purchaseHandler = ()=>{
        this.setState({purchasing:true})
    }

    updatePurchaseState = (ingredients)=>{
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);

        console.log(ingredients);
        console.log(sum, sum > 0);

        this.setState({ purchasable: sum > 0 });


    }

    addIngredientHandler = (type) => {


        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if (oldCount === 0)
            return;

        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceDifference = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDifference;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        return (
            <div >
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burguer ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    burguerPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </div>);
    }



}

export default BurguerBuilder;