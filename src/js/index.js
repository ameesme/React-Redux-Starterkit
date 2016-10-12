import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { App } from 'components/app';
import { HelloWorld } from 'components/hello-world';
import store from 'state/store';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} name="App">
        <IndexRoute component={HelloWorld} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
