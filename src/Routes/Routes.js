import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListContainer from '../Components/Books/Containers/ListContainer.js';
import AddEditBook from '../Components/Books/Containers/AddEditBook.js';


  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    render() {
      if (this.state.hasError) {
        // Rendering error page
        return (
          <div className="main protected">
            <div className="something-wrong">
              <img src="/images/something-wrong.png" />
            </div>
          </div>
          );
      } else {
        return this.props.children;
      }
     
    }
  }

const router =
<ErrorBoundary>
	<Switch>
        <Redirect exact path="/" to="books" />
      	<Route exact path="/books" component={(ListContainer)} />
        <Route exact path="/add-book" component={(AddEditBook)} />
        <Route exact path="/add-book/:id/edit" component={(AddEditBook)} />
	</Switch>
</ErrorBoundary>


export default router;
