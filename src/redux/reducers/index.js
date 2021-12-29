import { combineReducers } from "redux";

import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

export default rootReducer;