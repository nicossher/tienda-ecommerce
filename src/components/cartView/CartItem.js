import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleOnClick = () => {
    removeItem(id, price, quantity);
  };

  return (
    <div className='d-flex mt-5 mx-5 p-3 justify-content-between cart-item'>
      <h3>{title}</h3>
      <h5>Precio Unitario: {price}</h5>
      <h5>Cantidad: {quantity}</h5>
      <button onClick={handleOnClick} className='btn-removeItem'>
        X
      </button>
    </div>
  );
};

export default CartItem;
