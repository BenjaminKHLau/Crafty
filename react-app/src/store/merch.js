// Action Types
const CREATE_NEW_ITEM = "shop/CREATE"
const GET_ALL_ITEMS = "shop/READ"
const UPDATE_ITEM = "shop/UPDATE"
const GET_ITEM_BY_ID = "shopId/READ"
const DELETE_ITEM = "shop/DELETE"

// Action Creators
const createNewMerchACTION = (payload) => {
    return {
     type: CREATE_NEW_ITEM,
     payload
    }
 }

 const getAllMerchACTION = (payload) => {
     return {
     type: GET_ALL_ITEMS,
     payload
    }
 }

const updateMerchACTION = (payload) => {
    return {
     type: UPDATE_ITEM,
     payload
    }
 }

const deleteMerchACTION = (payload) => {
    return {
     type: DELETE_ITEM,
     payload
    }
 }
const getMerchByIdACTION = (payload) => {
    return {
     type: GET_ITEM_BY_ID,
     payload
    }
 }


 // Thunk Action Creators
export const getAllMerchThunk = () => async dispatch => {
    const response = await fetch(`/api/merch/`, {
        method: "GET"
    })
    const data = await response.json();
    if (response.ok){
        dispatch(getAllMerchACTION(data))
    }

    return data
}

export const addMerchThunk = (merch) => async dispatch => {
  const response = await fetch(`/api/merch/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(merch)
  })

  if (response.ok) {
    const newMerch = await response.json()
    dispatch(createNewMerchACTION(newMerch))
    return newMerch
  }
  return response.json()
}

export const updateMerchThunk = (payload, merchId) => async dispatch => {
    const response = await fetch(`/api/merch/${merchId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const merchy = await response.json();
        dispatch(updateMerchACTION(merchy))
    }
    return response
}

export const getMerchByIdThunk = (merchId) => async dispatch => {
    const response = await fetch(`/api/merch/${merchId}`, {
        method: "GET"
    })
    if (response.ok) {
        const merch = await response.json();
        dispatch(getMerchByIdACTION(merch))
        return merch;
    }
}

export const deleteMerchThunk = (merchId) => async dispatch => {
    const response = await fetch(`/api/merch/${merchId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteMerchACTION(merchId))
    }
}


// REDUCER UPDATES STATE
const initialState = {};


const MerchReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){
        case GET_ALL_ITEMS: {
            console.log("REDUCER GET ALL MERCH ACTION: ",action)
            newState = {...action.payload}
            return newState
        }
      	case CREATE_NEW_ITEM: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_ITEM: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case GET_ITEM_BY_ID: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_ITEM: {
            newState = { ...state }
            delete newState[action.payload]
            return newState;
      	}

    default:
    return state;
    }
}

export default MerchReducer;
