import './Idle.css';

import { DcduContainer } from '../../components/DcduContainer';

export function Idle() {
  const top = (
    <div className="dcdu-idle text-xl">
      NO ACTIVE ATC
    </div>
  );

  return (
    <DcduContainer top={top} />
  );
}
