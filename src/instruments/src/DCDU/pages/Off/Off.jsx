import { Redirect } from 'react-router-dom';
import { usePower } from '../../../utils/hooks/usePower.mjs';

export function Off() {
  const power = usePower();

  if (power) {
    return <Redirect to="/selfTest" />;
  }

  return <></>;
}
