import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import MyNotes from './pages/myNotes';
import About from './pages/about';
import SharedNotes from './pages/sharedNotes';
import PageNotFound from './pages/pageNotFound';
import { PATH_MY_NOTES, PATH_SHARED_NOTES, PATH_ABOUT, PATH_NOT_FOUND, PATH_ROOT, PATH_REGISTRATION } from './assets/paths';
import theme from './theme';
import Registration from 'pages/registration';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter basename="/Notes-List">
      <Switch>
        <Route exact path={PATH_ROOT}>
          <Redirect to={PATH_MY_NOTES} />
        </Route>
        <Route path={PATH_REGISTRATION} component={Registration} />
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
