//React Imports
import React, {useState} from 'react';

//Context
import OrderContext from "./context/OrderContext"

//Components
import Layout from "./components/Layout/Layout";

//CSS
import './App.css';

function App() {

  const [burgerState, setBurgerState] = useState({
    meat: 1,
    salad: 1
  });

  const moreMeat = () => {
      setBurgerState((prevState) => {
          return {
              meat: prevState.meat+1,
              salad: prevState.salad
          }
      })
  }
  const lessMeat = () => {
      if(burgerState.meat > 0){
          setBurgerState((prevState) => {
            return {
                meat: prevState.meat-1,
                salad: prevState.salad
            }
          })
      }   
  }
  const moreSalad = () => {
      setBurgerState((prevState) => {
        return {
          meat: prevState.meat,
          salad: prevState.salad+1
        }
      })
  }
  const lessSalad = () => {
      if(burgerState.salad > 0){
          setBurgerState((prevState) => {
              return {
                  meat: prevState.meat,
                  salad: prevState.salad-1
              }
          })
      }   
  }
  const order = () => {
    console.log(`Meat: ${burgerState.meat} \n Salad: ${burgerState.salad}`)
  }
  
  return (
    <OrderContext.Provider
    value={{
      state: burgerState,
      moreMeat: moreMeat,
      lessMeat: lessMeat,
      moreSalad: moreSalad,
      lessSalad: lessSalad,
      order: order
    }}>
      <Layout>

      </Layout>
    </OrderContext.Provider>
  );
}

export default App;
