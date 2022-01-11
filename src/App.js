import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Button, Header } from "./componets";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";

const App = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    // перенети в redux і підключити redux-thunk
    // слідкувати за фільтрацією і сортуванням і підставляті параметри в url з redux
    // зробити імитацію загрузки піц яки є в css в pizzablock
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>


  );
};

export default App;
