import React from 'react';
import ReactDOM from 'react-dom';
import { ReportHandler } from 'web-vitals';

import './app.css';

ReactDOM.render(
  <React.StrictMode>
    <header className="App-header">quepon</header>
  </React.StrictMode>,
  document.getElementById('root')
);

( // Report Web Vitals
  (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
})();
