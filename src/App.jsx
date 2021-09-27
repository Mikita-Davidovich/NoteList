import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MyNotes from './pages/myNotes';
import About from './pages/about';
import SharedNotes from './pages/sharedNotes';
import PageNotFound from './pages/pageNotFound';
import NavBar from './shared/navBar';
import { PATH_MY_NOTES, PATH_SHARED_NOTES, PATH_ABOUT, PATH_NOT_FOUND } from './assets/paths';
import theme from './theme';

const App = () => {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const openNavBar = (bool) => {
    setNavBarOpen(bool);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename="/notes">
        <Switch>
          <Route path={PATH_NOT_FOUND} component={PageNotFound} />
          <Route path={PATH_MY_NOTES} exact component={() => <MyNotes isNavBarOpen={isNavBarOpen} openNavBar={openNavBar} />} />
          <Route path={PATH_ABOUT} component={() => <About isNavBarOpen={isNavBarOpen} openNavBar={openNavBar} />} />
          <Route path={PATH_SHARED_NOTES} component={() => <SharedNotes isNavBarOpen={isNavBarOpen} openNavBar={openNavBar} />} />
          <Redirect to={PATH_NOT_FOUND} />
        </Switch>
        <NavBar isNavBarOpen={isNavBarOpen} openNavBar={openNavBar} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
