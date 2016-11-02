import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import Compose from './app/containers/Compose';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {MainLayout, SearchLayout, UserList} from './app/layouts/MainLayout';

import 'todomvc-app-css/index.css';

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={MainLayout}>
				<Route path="/" component={App}/>
				<Route path="/compose" component={Compose}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
