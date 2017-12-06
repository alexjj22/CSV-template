import React        from 'react';
import ReactDOM     from 'react-dom';
import App          from './Containers/App/index';
import { Provider } from 'react-redux';
import store        from './Store/index';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();