import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartThunk, getCartThunk } from "../../store/cart";
import "./shoppingCart.css"
import { Link } from "react-router-dom";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCartThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const removeFromCart = (item) => {
    dispatch(deleteFromCartThunk(item.id));
  };

  const removeAllItems = () => {
    cart.forEach((item) => {
      dispatch(deleteFromCartThunk(item.id));
    });
  };

  return isLoaded && (
    <section id="cart">
      <h1>Your Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/merch/${item.id}`}>
                {item.name}
                </Link>

                </td>

              <td>
                <button className="" onClick={() => removeFromCart(item)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="login-signup" onClick={removeAllItems}>Checkout</button>
    </section>
  );
}

export default Cart;
