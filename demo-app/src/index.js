import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { App } from './App';

render(
  // React.createElement(App)
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // css selector syntax
  // '#root' selects the element with an id of root
  document.querySelector('#root'),
)