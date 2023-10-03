import { useCallback, useState } from 'react';
import { product } from '../types/product';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useFetchPut = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (editProduct: product) => {
    let response;
    let json;

    try {
      setError("");
      setLoading(true);
      response = await fetch(backendUrl + "product", {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editProduct.name,
          price: Number(`${editProduct.price}`.replace(",", ".")),
          image: editProduct.image,
          discountRate: Number(`${editProduct.discountRate}`.replace(",", ".")),
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

export default useFetchPut;
