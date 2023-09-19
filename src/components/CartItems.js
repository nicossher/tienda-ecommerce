const CartItems = ({ stock = 0 }) => {
  return (
    <span className='position-absolute translate-middle badge rounded-pill bg-white start-100 top-50 ms-1 text-dark '>
      {stock}
    </span>
  );
};
export default CartItems;
