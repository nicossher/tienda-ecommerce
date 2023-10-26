import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const BtnCarrito = ({ stock, id, title, price }) => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const { addItem } = useContext(CartContext);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleOnAdd = () => {
    const item = {
      id,
      title,
      price,
    };

    addItem(item, count);
    setFinished(true);
  };

  if (finished) {
    return (
      <div>
        <button className='btn btn-primary mt-3 container text-center'>
          <Link
            className='text-white link-offset-2 link-underline link-underline-opacity-0'
            to={"/cart"}
          >
            TERMINAR COMPRA
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className='mt-3 d-flex justify-content-between rounded p-1'>
          <button
            onClick={decrement}
            className='border border-0 .bg-white'
            disabled={count == 0}
          >
            -
          </button>
          <p className='text-center my-auto'>{count}</p>
          <button
            onClick={increment}
            className='border border-0 .bg-white'
            disabled={count == stock}
          >
            +
          </button>
        </div>

        <div>
          <button
            className='btn btn-primary mt-3 container text-center'
            onClick={handleOnAdd}
            disabled={!count}
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </>
    );
  }
};

export default BtnCarrito;
