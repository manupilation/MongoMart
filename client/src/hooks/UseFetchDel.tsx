import { useCallback, useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useFetchDel = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (excludeId: string) => {
    let response;
    let json;

    try {
      setError("");
      setLoading(true);
      response = await fetch(backendUrl + "product", {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: excludeId,
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

export default useFetchDel;
