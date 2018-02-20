// Modules
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// Components
import StorePicker from './components/storekeeper'
import App from './components/app'
import NotFound from './components/notfound'

// Styles
import './css/style.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render(<Root />, document.querySelector('#main'));