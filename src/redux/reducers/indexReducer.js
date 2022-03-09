import { combineReducers } from 'redux';

import pizzasReducer from './pizzasReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  filter: filtersReducer,
  pizzas: pizzasReducer,
});


export default rootReducer;
