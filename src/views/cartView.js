import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/cartView/CartItem";

function CartView() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart == 0) {
    return (
      <div className='d-grid gap-2'>
        <h2 className='text-center m-5 fs-1'>No hay productos en el carrito</h2>
        <Link to='/' className='btn btn-primary linkButton'>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item}></CartItem>
      ))}
      <h2 className='text-center m-5 fs-1'>Total: {totalPrice}</h2>
      <div className='d-flex justify-content-center'>
        <button onClick={clearCart} className='btn-cleanCart'>
          Limpiar carrito
        </button>
      </div>
      <div className='d-grid gap-2'>
        <Link to='/checkout' className='btn btn-primary linkButton'>
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartView;
