import React from 'react';
import classes from './Burger.css';
import BurgerIndg from './BurgerIndg/BurgerIndg';

const burger=(props)=>{
    return(
        <div className={classes.Burger}>
        <BurgerIndg type="bread-top" />
        <BurgerIndg type="cheese" />
        <BurgerIndg type="meat" />
        <BurgerIndg type="bread-bottom" />
        </div>
    );
}
export default burger;