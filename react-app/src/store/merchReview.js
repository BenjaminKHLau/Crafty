// Action Types
const CREATE_NEW_MR = "mr/CREATE"
const GET_ALL_MR = "mr/READ"
const UPDATE_MR = "mr/UPDATE"
const GET_MR_BY_ID = "mr2/READ"
const DELETE_MR = "mr/DELETE"

// Action Creators
const createMRACTION = (payload) => {
    return {
     type: CREATE_NEW_MR,
     payload
    }
 }

const getMRACTION = (payload) => {
     return {
     type: GET_ALL_MR,
     payload
    }
 }

const updateMRACTION = (payload) => {
    return {
     type: UPDATE_MR,
     payload
    }
 }

const deleteMRACTION = (payload) => {
    return {
     type: DELETE_MR,
     payload
    }
 }
const getMRByIdACTION = (payload) => {
    return {
     type: GET_MR_BY_ID,
     payload
    }
 }


 // Thunk Action Creators
export const getAllMRThunk = () => async dispatch => {
    const response = await fetch(`/api/merch_rev/`, {
        method: "GET"
    })
    const data = await response.json();
    if (response.ok){
        dispatch(getMRACTION(data))
    }

    return data
}

export const addMRThunk = (review) => async dispatch => {
  const response = await fetch(`/api/merch_rev/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })

  if (response.ok) {
    const newReview = await response.json()
    // console.log("newReview ADD THUNK: ", newReview)
    dispatch(createMRACTION(newReview))
    return newReview
  }
  return response.json()
}

export const updateMRThunk = (payload, reviewId) => async dispatch => {
    const response = await fetch(`/api/merch_rev/${reviewId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const merchy = await response.json();
        dispatch(updateMRACTION(merchy))
    }
    return response
}

export const getMRByIdThunk = (reviewId) => async dispatch => {
    const response = await fetch(`/api/merch_rev/${reviewId}`, {
        method: "GET"
    })
    if (response.ok) {
        const review = await response.json();
        dispatch(getMRByIdACTION(review))
        return review;
    }
}

export const deleteMRThunk = (reviewId) => async dispatch => {
    const response = await fetch(`/api/merch_rev/${reviewId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteMRACTION(reviewId))
    }
}


// // REDUCER UPDATES STATE
const initialState = {};


const MerchRevReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){
        case GET_ALL_MR: {
            newState = {...action.payload}
            return newState
        }
      	case CREATE_NEW_MR: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_MR: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case GET_MR_BY_ID: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_MR: {
            newState = { ...state }
            delete newState[action.payload]
            return newState;
      	}

    default:
    return state;
    }
}

export default MerchRevReducer;