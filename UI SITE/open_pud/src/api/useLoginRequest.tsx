import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/login';

export function useLoginRequest() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mandarUser = async (requestData: any) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(BASE_URL, requestData);

      setData(response.data);
      setLoading(false);
    } catch (err:any) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, loading, error, mandarUser };
}
