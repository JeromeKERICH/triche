// hooks/usePaystack.js
import { useEffect, useState } from 'react';

export const usePaystack = () => {
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkPaystack = () => {
      if (window.PaystackPop && window.PaystackPop.setup) {
        setIsReady(true);
      } else {
        setTimeout(checkPaystack, 500);
      }
    };

    checkPaystack();

    return () => clearTimeout(checkPaystack);
  }, []);

  return { error, isReady };
};