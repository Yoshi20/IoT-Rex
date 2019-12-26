import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import configureApi from './api';

import { EventTree, EventNode } from './screens/DeviceScreen/tree';

/* Components */
import AppRouter from './routers/AppRouter';

/* Store */
import configureStore from './store/configureStore';
import { userLoad } from './store/modules/user';

/* Styles */
import './index.css';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
    fontSize: 18,
  },
  palette: {
    primary: { main: '#1f262b' }, // Purple and green play nicely together.
    secondary: { main: '#417cce', contrastText: '#e1e1e1' }, // This is just green.A700 as hex.
  },
});

const store = configureStore();
configureApi(store);

store.dispatch(userLoad());

/* Only for testing */
// let tree = new EventTree(new EventNode());

let node = new EventNode('Node1');
node.addAcknowledgeEvent(new EventNode('Node2'));
node.addTimeoutEvent(100, new EventNode('Node3'));

console.log(node);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
