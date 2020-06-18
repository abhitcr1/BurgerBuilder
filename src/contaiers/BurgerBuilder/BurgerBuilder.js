import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components//Burger/Burger';

class BurgerBuilder extends Component{

 state={
     indg:{
         salad:1,
         bacon:1,
         cheese:2,
         meat:2
     }
 }


    render(){
    return(
        <Aux>
            <Burger indg={this.state.indg}/>
            <div>Build Controls</div>
        </Aux>
    );
}
}

export default BurgerBuilder;