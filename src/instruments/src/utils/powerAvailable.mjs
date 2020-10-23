import { getSimVar } from './util.mjs';

// TODO: Move anything dependent on ac power change to A32NX_Core
export function powerAvailable() {
  // These are inlined so they're only evaluated if prior conditions return false.
  return (
    Simplane.getEngineActive(0) === 1 || Simplane.getEngineActive(1) === 1
  ) || (
    getSimVar('L:APU_GEN_ONLINE')
  ) || (
    getSimVar('EXTERNAL POWER AVAILABLE:1') && getSimVar('EXTERNAL POWER ON')
  );
}
