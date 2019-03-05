import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';


/*
  We need to create an App which has 3 pages and we want to route to them.
  To do that we need to have our components which we want to load on the browser. In this case:
    ---> Home
    ---> About
    ---> Contact
  As out App get's bigger we need to manage it in better folder structure therefore we create a component folder.
  Inside that folder we created our pages.
  We are using Materialize CSS to design our pages there will be using the Materialize CSS classes for our components.
    ---> Reference link - https://materializecss.com/

  The react-router-dom is used to let the App to render components as soon as there is request for new page.
  We use the following to component to define the react router
        --> <BrowserRouter></BrowserRouter> :
                -> Wraps all your Route components.
                -> A BrowserRouter component can only have one child element,
                -> so we wrap all we’re going to add in a div element.
        --> <Route></Route>
                -> When the route matches /, the application shows the Home component.
                -> When the route is changed by clicking the “About” link to /about,
                   the Home component is removed and the About component is inserted in the DOM.
                -> Notice the 'exact' attribute. Without this, path="/" would also match /about, since / is contained in the route.

Notice the exact attribute. Without this, path="/" would also match /about, since / is contained in the route.
*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            {/* We add a new Route to match the route params to do that we use colon (:<route_parameter>)*/}
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
