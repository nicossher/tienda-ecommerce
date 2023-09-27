import { useState } from "react";

const BtnCarrito = ({ stock }) => {
  const [count, setCount] = useState(0);

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

  const onAdd = () => {
    console.log(count);
  };

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
      <button
        className='btn btn-primary mt-3 container text-center'
        onClick={onAdd}
        disabled={!count}
      >
        AGREGAR AL CARRITO
      </button>
    </>
  );
};

export default BtnCarrito;
