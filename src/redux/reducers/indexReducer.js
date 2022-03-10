import { combineReducers } from 'redux';

import pizzasReducer from './pizzasReducer';
import filtersReducer from './filtersReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
  filter: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});


export default rootReducer;
