import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './burgerIndg.css';


class BurgerIndg extends Component{
render(){
    let indg=null;

    switch(this.props.type){
        case('bread-bottom'):
            indg= <div className={classes.BreadBottom}>  </div>;
            break;
            case('bread-top'):
                indg= (
                <div className={classes.BreadTop}>  
                           <div className={classes.seeds1}></div>
                         <div className={classes.seeds2}></div>
            </div>
                );
            break;
            case('meat'):
            indg= <div className={classes.Meat}>  </div>;
            break;
            case('cheese'):
            indg= <div className={classes.Cheese}>  </div>;
            break;
            case('bacon'):
            indg= <div className={classes.Bacon}>  </div>;
            break;
            case('salad'):
            indg= <div className={classes.Salad}>  </div>;
            break;
            default:
                indg=null;
    }
    return indg;
}

} 

BurgerIndg.PropTypes={
    type: PropTypes.string.isRequired
};

export default BurgerIndg;