import * as actionTypes from './actionTypes'
export const getData = (data) => ({
    type:actionTypes.GET_PRODUCTS,
    payload:data
})

export const addToCart = (data) => ({
    type:actionTypes.ADD_TO_CART,
    payload:data
})
export const removeFromCart = (data) => ({
    type:actionTypes.REMOVE_FROM_CART,
    payload:data
})

// export const getProducts = () =>
//     async (dispatch) => {
//         let data=[];
//         await fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(jsonData=>data=jsonData);
//             dispatch({type:actionTypes.GET_PRODUCTS,payload:data})
//     }