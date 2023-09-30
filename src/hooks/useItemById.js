import { useEffect, useState } from "react";
import { getItem } from "../asyncMock";

export const useItemById = (itemId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem(itemId)
      .then((data) => {
        setProduct(data);
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
