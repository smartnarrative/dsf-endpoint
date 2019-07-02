import { useState, useEffect } from 'react';

export default function DSFEventBus(outerUrl:string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents(innerUr:string) {
      const response = await fetch(innerUr);
      const payload = await response.json();
      setData(payload);
      setLoading(false);
    }
    getEvents(outerUrl);
  }, [outerUrl]);
  return [data, loading];
}

