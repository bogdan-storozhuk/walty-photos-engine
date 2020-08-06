import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/';
import ErrorBoundry from './components/error-boundry/error-boundry';
import PixbayApi from './api/pixbay-api';
import { PixbayApiProvider } from './components/pixbay-api-context/pixbay-api-context';
import store from './store';

const pixbayApi = new PixbayApi();

ReactDOM.render(
<Provider store={store}>
    <ErrorBoundry>
        <PixbayApiProvider value={pixbayApi}>
            <Router>
                <App/>
            </Router>
        </PixbayApiProvider>
    </ErrorBoundry>
</Provider>,
 document.getElementById('root'));