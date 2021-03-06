import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import RolePicker from './components/RolePicker';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path='/' component={RolePicker} />
					<Route path='/:role' component={App} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
