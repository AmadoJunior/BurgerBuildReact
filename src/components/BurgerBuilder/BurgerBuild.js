import React, {useContext} from "react";

//Cmp
import Meat from "./Meat/Meat";
import Salad from "./Salad/Salad";
import Bun from "./Bun/Bun";

//Context
import OrderContext from "./../../context/OrderContext";

function BurgerBuilder(){

    const orderContext = useContext(OrderContext);

    const contentsArr = [];

        for(let i = 0; i < orderContext.state.salad; i++){
            let randomId = Math.floor(Math.random() * 1000);
            contentsArr.push(<Salad key={randomId}/>);
        }

        for(let j = 0; j < orderContext.state.meat; j++){
            let randomId = Math.floor(Math.random() * 1000);
            contentsArr.push(<Meat key={randomId}/>);
        }

    return (
        
        <div className="BurgerBuilder">
            <div>
                <Bun></Bun>
                {contentsArr}
                <Bun></Bun>

                <p>Meat:</p>
                <button onClick={orderContext.moreMeat}>+</button>
                <button onClick={orderContext.lessMeat}>-</button>
                <p>Salad:</p>
                <button onClick={orderContext.moreSalad}>+</button>
                <button onClick={orderContext.lessSalad}>-</button>
            </div>
            
            <div>
                <button onClick={orderContext.order}>Order</button>
            </div>
        </div>
    )
}

export default BurgerBuilder;