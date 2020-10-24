import React from 'react';
import { usePower } from '../hooks/usePower.mjs';

export const PowerContext = React.createContext({ power: false });

// eslint-disable-next-line react/prop-types
export const PowerProvider = ({ children }) => {
  const power = usePower();

  return (
    <PowerContext.Provider value={{ power }}>
      {children}
    </PowerContext.Provider>
  );
};
