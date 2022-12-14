// Action Types
const CREATE_NEW_SHOP = "shop/CREATE"
const GET_ALL_SHOPS = "shop/READ"
const UPDATE_SHOP = "shop/UPDATE"
const GET_SHOP_BY_ID = "shopId/READ"
const DELETE_SHOP = "shop/DELETE"
const DELETE_MERCHY = "merchy/DELETE"

// Action Creators
const createNewShopACTION = (payload) => {
    return {
     type: CREATE_NEW_SHOP,
     payload
    }
 }

 const getAllShopsACTION = (payload) => {
     return {
     type: GET_ALL_SHOPS,
     payload
    }
 }

const updateShopACTION = (payload) => {
    return {
     type: UPDATE_SHOP,
     payload
    }
 }

const deleteShopACTION = (payload) => {
    return {
     type: DELETE_SHOP,
     payload
    }
 }
export const deleteMerchACTION2 = (payload) => {
    return {
     type: DELETE_MERCHY,
     payload
    }
 }
const getShopByIdACTION = (payload) => {
    return {
     type: GET_SHOP_BY_ID,
     payload
    }
 }


 // Thunk Action Creators
export const getAllShopsThunk = () => async dispatch => {
    const response = await fetch(`/api/shops/`, {
        method: "GET"
    })
    const data = await response.json();
    if (response.ok){
        dispatch(getAllShopsACTION(data))
    }

    return data
}

export const addShopThunk = (shop) => async dispatch => {
  const response = await fetch(`/api/shops/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shop)
  })

  if (response.ok) {
    const newShop = await response.json()
    dispatch(createNewShopACTION(newShop))
    return newShop
  }
  return response.json()
}

export const updateShopThunk = (payload, shopId) => async dispatch => {
    const response = await fetch(`/api/shops/${shopId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const shoppy = await response.json();
        dispatch(updateShopACTION(shoppy))
    }
    return response
}

export const getShopByIdThunk = (shopId) => async dispatch => {
    const response = await fetch(`/api/shops/${shopId}`, {
        method: "GET"
    })
    if (response.ok) {
        const shop = await response.json();
        dispatch(getShopByIdACTION(shop))
        return shop;
    }
}

export const deleteShopThunk = (shopId) => async dispatch => {
    const response = await fetch(`/api/shops/${shopId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteShopACTION(shopId))
    }
}


// REDUCER UPDATES STATE
const initialState = {};


const ShopsReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){
        case GET_ALL_SHOPS: {
            // console.log("REDUCER GET ALL SHOPS ACTION: ",action)
            newState = {...action.payload}
            return newState
        }
      	case CREATE_NEW_SHOP: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_SHOP: {
            console.log("UPDATE SHOP IN REDUCER: ", action.payload)
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case GET_SHOP_BY_ID: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_SHOP: {
            newState = { ...state }
            delete newState[action.payload]
            return newState;
      	}
        case DELETE_MERCHY: {
            newState = { ...state }
            const {merchId, shopId} = action.payload
            const merch = newState[shopId].merch
            const newMerch = merch.filter(merch => {
               return merch.id !== merchId
            })
            newState[shopId].merch = newMerch
            
            return newState
        }

    default:
    return state;
    }
}

export default ShopsReducer;
