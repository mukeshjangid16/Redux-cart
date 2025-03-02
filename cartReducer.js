import * as actionTypes from '../actions/actionTypes'
const initialState={
    products:[],
    cartItems:[],
    loading:true
}
const cartReducer = (state=initialState,action) => {
    let newState;
    switch(action.type){
        case actionTypes.GET_PRODUCTS:
            return newState={
                ...state,
                products:action.payload
            };
        case actionTypes.ADD_TO_CART:
            return newState={
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        case actionTypes.REMOVE_FROM_CART:
            return newState={
                ...state,
                cartItems:state.cartItems.filter((item)=>item.id !== action.payload)
            }
        default :
            return state;
    }
}
export default cartReducer