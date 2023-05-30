import { useState } from "react";
import { API_GMAIL } from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async (payload, type = "") => {
    setResponse(null);
    setError("");
    try {
      setIsLoading(true);
      let res = await API_GMAIL(urlObject, payload, type);
      setResponse(res.data.result);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { call, response, error, isLoading };
};

export default useApi;
