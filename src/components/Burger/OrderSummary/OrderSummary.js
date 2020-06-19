import React from 'react';
import Aux from '../../../hoc/Auxi';

const ordarSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return (
            <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>  );
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}

            </ul>
            <p>Continue to CheckOut</p>
            <button>Cancel</button>
            <button>Continue</button>
                
        </Aux>
    );
}
export default ordarSummary;