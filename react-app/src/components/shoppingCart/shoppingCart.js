import { useEffect, useState } from "react"
import {deleteFromCartACTION, readCartACTION, addToCartACTION, getCartThunk} from "../../store/cart"
import {useDispatch, useSelector} from "react-redux"

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || "[]"

function Cart(){
    const dispatch = useDispatch()
    // const items = useSelector(state => state.items)
    const cart = useSelector(state => state.cart)
    // const cart = useSelector(state => state)
    const [isLoaded, setIsLoaded] = useState(false)
    console.log("CART", cart)

    useEffect(()=>{
        dispatch(getCartThunk())
        setIsLoaded(true)
    },[dispatch])

    // const [cart, setCart] = useState(cartFromLocalStorage)
    // // const [page, setPage] = useState()

    // useEffect(()=>{
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // },[cart])



    return isLoaded && (
        <>
        <h1>Your Shopping Cart</h1>
        {/* <div>{cart.map(item => (
            <div>{item}</div>
        ))}</div> */}
    <div>{cart?.cart.map(item => (
        item.name
    ))}</div>
        </>

    )


}

export default Cart;