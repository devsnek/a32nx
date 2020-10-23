import { useState } from 'react';
import { powerAvailable } from '../powerAvailable.mjs';
import { useUpdate } from '../util.mjs';

export function usePower() {
  const [power, setPower] = useState(false);

  useUpdate((_deltaTime) => {
    if (powerAvailable()) {
      setPower(true);
    } else {
      setPower(false);
    }
  });

  return power;
}
