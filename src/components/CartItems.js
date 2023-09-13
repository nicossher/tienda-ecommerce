const CartItems = ({ count = 0 }) => {
  return (
    <span class='position-absolute translate-middle badge rounded-pill bg-white start-100 top-50 ms-1 text-dark '>
      {count}
    </span>
  );
};
export default CartItems;
