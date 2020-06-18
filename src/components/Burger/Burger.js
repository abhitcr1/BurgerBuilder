import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIndg/BurgerIndg';
import { Array } from 'prop-types';


const burger=(props)=>{
    const transIngredients =Object.keys(props.indg)
    .map(igKey=>{
        return[...Array(props.indg[igKey])].map((_, i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    });


    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
       {transIngredients}
        <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default burger;