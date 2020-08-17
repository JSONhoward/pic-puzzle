import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
