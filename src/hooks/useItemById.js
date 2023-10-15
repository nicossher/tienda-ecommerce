import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../index";

export const useItemById = (itemId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const biciRef = doc(db, "items", itemId);
    getDoc(biciRef)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return {
    product,
    loading,
  };
};
