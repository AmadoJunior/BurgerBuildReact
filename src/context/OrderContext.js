import React from "react";

const OrderContext = React.createContext({
    state:{
        meat: 0,
        salad: 0
    },
    moreMeat: () => {},
    lessMeat: () => {},
    moreSalad: () => {},
    lessSalad: () => {},
    order: () => {}
})

export default OrderContext;