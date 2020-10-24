import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { PowerContext } from '../../../utils/contexts/PowerContext';

export function Off() {
  const { power } = useContext(PowerContext);

  if (power) {
    return <Navigate to="/initialization" />;
  }

  return <></>;
}
