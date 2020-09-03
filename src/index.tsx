import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'
import './Styles/index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker'; TODO service worker type definition

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
