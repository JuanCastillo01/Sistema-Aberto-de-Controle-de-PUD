import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/signin';

export function useCustomApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (requestData: any) => {
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

  return { data, loading, error, postData };
}
