// Actions
const ADD_TO_CART = "cart/ADD";
const UPDATE_CART = "cart/UPDATE";
const DELETE_FROM_CART = "cartitem/DELETE";
const EMPTY_CART = "cart/CHECKOUT";
const GET_CART = "cart/READ"

// Action Creators
export function addToCartACTION(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}
export function updateCartACTION(payload) {
  return {
    type: UPDATE_CART,
    payload,
  };
}
export function deleteFromCartACTION(payload) {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
}
export function checkoutCartACTION(payload) {
  return {
    type: EMPTY_CART,
    payload,
  };
}
export function readCartACTION(payload) {
  return {
    type: GET_CART,
    payload,
  };
}


export function getCartThunk(){
  return async dispatch => {
    const response = await fetch('/api/cart/')
    const data = await response.json()
    dispatch(readCartACTION(data))
  }
}

const initialState = {
  cart: [],
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      console.log(action.payload, "ACTION PAYLOAD GET CART" )
        return {
            ...state,
            cart: [...action.payload]
        }
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case DELETE_FROM_CART:
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }

    default:
      return state;
  }
}

export default CartReducer