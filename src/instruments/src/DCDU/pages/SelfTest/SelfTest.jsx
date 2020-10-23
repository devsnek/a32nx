import './SelfTest.style.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function SelfTest() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/waiting');
    }, (Math.random() * (10 - 2) + 2) * 1000);
  }, []);

  return (
    <>
      <div className="dcdu__selfTest--container">
        <div>SELF TEST IN PROGRESS</div>
        <div>(MAX 10 SECONDS)</div>
      </div>
    </>
  );
}
