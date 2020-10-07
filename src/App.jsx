import React, {useState, useEffect} from "react";
import {Header} from "./components"
import {Home, Cart} from "./pages"
import { Route } from "react-router-dom";
import Axios from "axios";



const App = () => {

  const [db, loadDb] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/db.json").then(resp=>loadDb(resp.data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={ () => <Home items={db} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
