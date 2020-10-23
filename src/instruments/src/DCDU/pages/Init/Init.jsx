import './Init.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function SelfTest() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('init/waiting');
    }, (Math.random() * (10 - 2) + 2) * 1000);
  }, []);

  return (
    <>
      <div className="dcdu-init-container">
        <div>SELF TEST IN PROGRESS</div>
        <div>(MAX 10 SECONDS)</div>
      </div>
    </>
  );
}

export function Waiting() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/idle');
    }, (Math.random() * (30 - 9) + 9) * 1000);
  }, []);

  return (
    <>
      <div className="dcdu-init-container">
        <div>WAITING FOR DATA</div>
        <div>(MAX 30 SECONDS)</div>
      </div>
    </>
  );
}
