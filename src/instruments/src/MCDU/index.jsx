import './style.css';

import ReactDOM from 'react-dom';
import {
  HashRouter, Routes, useNavigate,
} from 'react-router-dom';

import { renderTarget } from '../utils/util.mjs';

import { usePower } from '../utils/hooks/usePower.mjs';

function MCDU() {
  const navigate = useNavigate();
  const power = usePower();

  if (!power) {
    navigate('/');
  }

  // useInteractionEvent('A32NX_MCDU_BTN_INOP', () => {
  // });

  return (
    <Routes />
  );
}

ReactDOM.render(<HashRouter><MCDU /></HashRouter>, renderTarget);
