import { useState, useEffect } from 'react';

/**
 * useFetch — istənilən URL-dən data çəkən custom hook.
 * Loading, error və data vəziyyətlərini idarə edir.
 *
 * @param {string} url - fetch ediləcək URL
 */
function useFetch(url) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false; // component unmount olarsa state set etmə

    setLoading(true);
    setError(null);
    setData(null);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(json => {
        if (!cancelled) setData(json);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    // cleanup — component unmount olsa fetch nəticəsi ignore edilir
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
