import CartItems from "./CartItems";

const CartWidget = () => {
  return (
    <div className='pt-3 ps-2 pt-xl-1 ps-xl-0 '>
      <button className='btn bg-dark carrito position-relative'>
        <i className='bi bi-bag fs-3'></i>
        <CartItems count={3} />
      </button>
    </div>
  );
};

export default CartWidget;
