import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../index";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsCollection = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return {
    products,
    loading,
  };
};
