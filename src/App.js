import React from "react";
import axios from "axios";

import { Header } from "./componets";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";

const App = () => {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });

    // fetch("http://localhost:3000/db.json")
    //   .then((resp) => {
    //     console.log('fetch', resp);
    //     return resp.json();
    //   })
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" render={Cart} exact />
      </div>
    </div>
  );
};

export default App;
