import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import openhouse from '../assets/images/openhouse.jpg';
import App from './container/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
 ReactDOM.render(
  <AppContainer>
   <HashRouter>
    <Component/>
   </HashRouter>
  </AppContainer>,
  document.getElementById('react-app-root')
 );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./container/App', () => {
    render(App);
  });
}
/*eslint-enable */