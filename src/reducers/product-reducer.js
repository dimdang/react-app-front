
const defaultState = {
    products: [],
    pagination: {},
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS': {
        return {
          ...state,
          products: action.payload.data
        }
      }
      case 'FETCH_PRODUCTS_FULFILLED': {
        const DATA = action.payload.data['DATA'];
        return {
          ...state,
          products: DATA.content,
          pagination: {
            first: DATA.first,
            last: DATA.last,
            number: DATA.number,
            numberOfElements: DATA.numberOfElements,
            size: DATA.size,
            sort: DATA.sort,
            totalElements:DATA.totalElements,
            totalPages: DATA.totalPages
          }
        }
      }
      default:
        return state;
    }
  }