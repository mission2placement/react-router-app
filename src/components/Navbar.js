import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// We are creating functional components because we are not storing any states over here.
// className nav-wrapper, container, brand-logo and right are materialzied classes to give our app a look.

/*
  Our Navigation in the page is now refreshing evertime we access the nav tabs.
  It refreshes because the the index.html is requested from the server everytime we navigate,
  therefore it shows the refreshing page.
  Since our application needs to be a SPA we don't want that request to go to server everytime.
  To avoid this problem react-router-dom gives us the components called:
      --> Link - In the background it does something similar to preventDefault().
                 Here the default behaviour of <a href /> is to request the page again
                 so <Link to="/"> tells react to load the component request instead of going to the server.
      --> NavLink - NavLink is same as Link it just adds a class of 'active' to the tab we navigate to.
                    It would help us if we want to give out active tab some css.
                    Inspect in the console of the browser to see how the tab which user selects gets a class='active'
   To apply the Link and NavLink we need to import those classes from the react-router-dom and use it instead of anchor tag.
*/

const Navbar = () => {

  // Since Navbar is present in every single page it should redirect to contact page in each page
  // We will take props here.
  // setTimeout(() => {
  //   props.history.push('/contact')
  // }, 2000)

  // This shows error! Why?
  // Our Home, About and Contact is recieving the props because it's under Route but Navbar isn't under <Route>
  // Therefore the <BrowserRouter> didn't pass those route props to Navbar therefore NAvbar doesn't receive those props.
  // Now we can use those property for Navbar by using HOC(higher ordered components)
  // HOC --> Are the components which wraps around a particular component and gives the wrapping components extra power.
  // To use this we need to import { withRouter } from 'react-router-dom'
  // and we need to tell export that the Navbar is supercharged with Route props.
  //      ---> export default withRouter(Navbar);

  return(
    <nav className='nav-wrapper blue darken-4'>
      <div className='container'>
        <Link to="/" className='brand-logo'>My brand</Link>
        <ul className='right'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
