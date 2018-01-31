
import { combineReducers } from 'redux';
import ProductReducer from './product-reducer';

const reducers = {
  productStore: ProductReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;