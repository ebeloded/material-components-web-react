import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import Catalog from './Catalog';
import TempPackage from './temporary-package';
import FooTest from './temporary-package/FooTest';
import BarTest from './temporary-package/BarTest';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouteContainer />
      </BrowserRouter>
    );
  }
}

class RouteContainer_ extends React.Component {
  render() {
    return (
      <main>
        <nav className="mdc-toolbar-fixed-adjust">
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/temporary-package" component={TempPackage} />
            <Route path="/temporary-package/foo-test" component={FooTest} />
            <Route path="/temporary-package/bar-test" component={BarTest} />
          </Switch>
        </nav>
      </main>
    );
  }
}


const RouteContainer = withRouter(RouteContainer_);