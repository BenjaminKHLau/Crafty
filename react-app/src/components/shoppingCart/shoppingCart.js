import { useEffect } from "react"
import {deleteFromCartACTION, readCartACTION, addToCartACTION} from "../../store/cart"
import {useDispatch, useSelector} from "react-redux"

function Cart(){
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const cart = useSelector(state => state.cart)

    useEffect(()=>{
        dispatch(readCartACTION())
    },[dispatch])

    return (
        <h1>CART</h1>

    )


}

export default Cart;