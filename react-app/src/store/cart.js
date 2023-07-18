// Actions
const ADD_TO_CART = "cart/ADD";
const UPDATE_CART = "cart/UPDATE";
const DELETE_FROM_CART = "cartitem/DELETE";
const EMPTY_CART = "cart/CHECKOUT";
const GET_CART = "cart/READ";

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

export function getCartThunk() {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/cart/');
      const data = await response.json();
      dispatch(readCartACTION(data));
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
}

export function addToCartThunk(item) {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        dispatch(addToCartACTION(data));
      } else {
        // Handle error response
        console.error('Failed to add item to cart.');
      }
    } catch (error) {
      // Handle fetch error
      console.error(error);
    }
  };
}


export function deleteFromCartThunk(itemId) {
  return async (dispatch) => {
    try {
      // Make API request to delete item from cart
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
      });

      // Handle response and update cart
      if (response.ok) {
        dispatch(deleteFromCartACTION(itemId));
      } else {
        // Handle error
        console.error('Failed to remove item from cart.');
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
}

const initialState = {
  cart: [],
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
      case ADD_TO_CART: {
        const { cart } = state;
        const newItem = action.payload;
  
        if (!cart.some((item) => item.id === newItem.id)) {
          // Add the item to cart only if it's not already present
          return {
            ...state,
            cart: [...cart, newItem],
          };
        }
  
        return state; // Item is already in cart, no need to update
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default CartReducer;
