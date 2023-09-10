const CartItems = ({ count = 0 }) => {
  return (
    <span class='position-absolute translate-middle badge rounded-pill bg-primary start-100 top-0'>
      {count}
    </span>
  );
};
export default CartItems;
