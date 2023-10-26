import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity(totalQuantity + quantity);
      setTotalPrice(totalPrice + item.price * quantity);
    } else {
      console.log("Error, el producto ya fue agregado");
    }
  };

  const removeItem = (itemId, price, quantity) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    setTotalPrice(totalPrice - price * quantity);
    setTotalQuantity(totalQuantity - quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalQuantity,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
