import React from 'react';
import ReactDOM,{render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/app';
import todoApp from './reducers/reducers';


let store = createStore(todoApp);

let rootElement=document.getElementById('root');
render(<Provider store={store}>
	        <App />
	    </Provider>,
	    rootElement);