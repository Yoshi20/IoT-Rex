import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/* Components */
import AppRouter from './routers/AppRouter';

/* Store */
import configureStore from './store/configureStore';
import { userLoad } from './store/modules/user';

/* Styles */
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#6d7993' }, // Purple and green play nicely together.
    secondary: { main: '#054b1a' }, // This is just green.A700 as hex.
  },
});

const store = configureStore();

store.dispatch(userLoad());

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
