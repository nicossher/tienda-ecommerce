import { useContext } from "react";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className='pt-3 ps-2 pt-xl-1 ps-xl-0 '>
      <button className='btn bg-dark position-relative'>
        <NavLink to={"/cart"} className='carrito'>
          <i className='bi bi-bag fs-3'></i>
        </NavLink>
        <CartItems count={totalQuantity} />
      </button>
    </div>
  );
};

export default CartWidget;
