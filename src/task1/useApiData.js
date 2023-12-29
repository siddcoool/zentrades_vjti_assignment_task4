import { useState, useEffect } from 'react';

const transformation = (data) => {
  const output = {
    products: [],
    count: data.count
  }

  for (const [key, value] of Object.entries(data.products)) {
    const obj = {
      ...value,
      id: key
    }
    output.products.push(obj)
  }

  return output;
}

const useApiData = (url) => {
  const [data, setData] = useState({
    products: [],
    count: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError('Network response was not ok');
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(transformation(fetchedData));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data: data.products, count: data.count, loading, error };
};

export default useApiData;
