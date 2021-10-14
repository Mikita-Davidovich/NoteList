import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import MyNotes from './pages/MyNotes';
import About from './pages/About';
import SharedNotes from './pages/SharedNotes';
import PageNotFound from './pages/PageNotFound';
import { PATH_MY_NOTES, PATH_SHARED_NOTES, PATH_ABOUT, PATH_NOT_FOUND, PATH_ROOT } from './assets/paths';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter basename="/Notes-List">
      <Switch>
        <Route exact path={PATH_ROOT}>
          <Redirect to={PATH_MY_NOTES} />
        </Route>
        <Route path={PATH_MY_NOTES} exact component={MyNotes} />
        <Route path={PATH_ABOUT} component={About} />
        <Route path={PATH_SHARED_NOTES} component={SharedNotes} />
        <Route path={PATH_NOT_FOUND} component={PageNotFound} />
        <Redirect to={PATH_NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
