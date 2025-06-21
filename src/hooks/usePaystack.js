// hooks/usePaystack.js
import { useEffect, useState } from 'react';

export const usePaystack = () => {
  const [state, setState] = useState({
    loaded: false,
    error: null
  });

  useEffect(() => {
    if (window.PaystackPop) {
      setState({ loaded: true, error: null });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    
    script.onload = () => {
      if (window.PaystackPop) {
        setState({ loaded: true, error: null });
      } else {
        setState({ loaded: false, error: 'Paystack failed to load' });
      }
    };
    
    script.onerror = () => {
      setState({ loaded: false, error: 'Failed to load Paystack script' });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return state;
};