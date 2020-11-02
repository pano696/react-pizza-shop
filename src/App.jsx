import React, { useEffect } from "react";
import { Header } from "./components"
import { Home, Cart } from "./pages"
import { Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import { setPizzas } from "./redux/action/pizzas";



const App = ({ items, setPizzas }) => {

  useEffect(() => {
    Axios.get("http://localhost:3000/db.json")
          .then(({data}) => setPizzas(data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={ () => <Home items={items} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
};


//Full
// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

//Short
const mapDispatchToProps = {
    setPizzas,
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
