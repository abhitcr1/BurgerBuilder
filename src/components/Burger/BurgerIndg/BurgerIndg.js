import React from 'react';


const burgerIndg=(props)=>{
    let indg=null;

    switch(props.type){
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

};
export default burgerIndg;