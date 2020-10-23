import './Waiting.style.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Waiting() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/idle');
    }, (Math.random() * (30 - 9) + 9) * 1000);
  }, []);

  return (
    <>
      <div className="dcdu__waiting--container">
        <div>WAITING FOR DATA</div>
        <div>(MAX 30 SECONDS)</div>
      </div>
    </>
  );
}
