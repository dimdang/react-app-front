
import { client } from './';

const url = '/product';
export function fetchProducts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: client.get(url)
    })
  }
}