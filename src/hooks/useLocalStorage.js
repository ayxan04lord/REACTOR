import { useState, useEffect } from 'react';

/**
 * useLocalStorage — useState kimi işləyir, amma dəyəri
 * localStorage-da saxlayır. Səhifə yenilənəndə dəyər qalır.
 *
 * @param {string} key       - localStorage açarı
 * @param {*}      initial   - ilkin dəyər (storage boşdursa)
 */
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null) return initial;
      const parsed = JSON.parse(stored);
      // Array gözlənilirsə amma array deyilsə, initial qaytar
      if (Array.isArray(initial) && !Array.isArray(parsed)) return initial;
      return parsed;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage dolu və ya private mode
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
