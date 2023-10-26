import { useContext, useState } from "react";
import CheckoutForm from "../components/checkout/checkoutForm";
import { CartContext } from "../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import { db } from "../index";

function CheckoutView() {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        items: cart,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "items");

      const productsAddFromFirebase = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddFromFirebase;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const dataStock = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (dataStock >= prodQuantity) {
          batch.update(doc.ref, { stock: dataStock - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadSpinner text='La orden se esta creando...' />;
  }

  if (orderId) {
    return <h1>El id de su order es: {orderId}</h1>;
  }

  return (
    <div className='mx-auto container mt-5 '>
      <h1 className='text-center'>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default CheckoutView;
