import { useCallback, useState } from 'react';
import { newProduct } from '../types/product';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useFetchPost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (newProduct: newProduct) => {
    let response;
    let json;

    try {
      setError("");
      setLoading(true);
      response = await fetch(backendUrl + "product", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newProduct.name,
          price: Number(`${newProduct.price}`.replace(",", ".")),
          image: newProduct.image,
          discountRate: Number(`${newProduct.discountRate}`.replace(",", ".")),
        }),
      });

      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError("Algo deu errado. Tente novamente.");
    } finally {
      setData(json);
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetchPost;
