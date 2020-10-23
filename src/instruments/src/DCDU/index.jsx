import './style.css';

import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch, useHistory,
} from 'react-router-dom';

import { renderTarget } from '../utils/util.mjs';

import { Idle } from './pages/Idle/Idle';
import { Off } from './pages/Off/Off';
import { SelfTest, Waiting } from './pages/Init/Init';
import { usePower } from '../utils/hooks/usePower.mjs';

function DCDU() {
  const history = useHistory();
  const power = usePower();

  if (!power) {
    history.push('/');
  }

  // useInteractionEvent('A32NX_DCDU_BTN_INOP', () => {
  // });

  return (
    <Switch>
      <Route exact path="/" component={Off} />
      <Route exact path="/init" component={SelfTest} />
      <Route exact path="/init/waiting" component={Waiting} />
      <Route exact path="/idle" component={Idle} />
    </Switch>
  );
}

ReactDOM.render(<HashRouter><DCDU /></HashRouter>, renderTarget);
