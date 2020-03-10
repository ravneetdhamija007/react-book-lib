import React from 'react';
import Routes from './Routes/Routes.js';
import { createBrowserHistory } from 'history';
import { Switch} from 'react-router';
import { Router } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    const history = createBrowserHistory();
    // Get the current location.
    const location = history.location;
    return(
      <Router history={history} >
        <Switch>
          {Routes}
        </Switch>
    </Router>
    )

  }
}

