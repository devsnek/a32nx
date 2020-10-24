import { useState } from 'react';
import { powerAvailable } from '../powerAvailable.mjs';
import { useUpdate } from '../util.mjs';

export function usePower() {
  const [power, setPower] = useState(false);

  useUpdate((_deltaTime) => {
    if (powerAvailable()) {
      if (!power) {
        setPower(true);
      }
    } else if (power) {
      setPower(false);
    }
  });

  return power;
}
