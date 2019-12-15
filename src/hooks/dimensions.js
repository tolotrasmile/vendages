import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

function useDimensions(key = 'window') {
  const [state, setState] = useState(() => Dimensions.get(key));

  useEffect(() => {
    const handler = item => setState(item[key]);
    Dimensions.addEventListener('change', handler);
    return () => {
      Dimensions.removeEventListener('change', handler);
    };
  }, [key]);

  return state;
}

export default useDimensions;
