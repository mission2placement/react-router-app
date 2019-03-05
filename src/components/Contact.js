import React from 'react';

// We are creating functional components because we are not storing any states over here.
// className container and center are materialzied classes to give our app a look.

const Contact = (props) => {
  /*
    Now we will learn about programmatic redirect --> When we want to send user to some page programmatically.
        For Example: We want user to automatically go to about page from this contact page.

    We directly pass props to our Contact page.
    These props are provided to the Contact component by the Router component.
        <Route>{Contact}</Route>
    The Router attaches some extra information to the props object.
    We can see those extra information in console: console.log(props).

    So we will make use of the history object which is provided by the router.
      props.history.push ---> push is a property of the history object which keeps track of the path
                      We can use this push property to redirect the user to the new path.
                      push(path, state) --> it takes path as an argument.
  */
  console.log(props);
  /*
    The props.history is the property which react-router function gives.
    We set a timeout to wait 2 secs and then push the user to about page.
    This is a programmatic redirect. Now let's try this in our Navbar component.
  */

  // setTimeout(()=>{
  //   props.history.push('/about')
  // }, 2000)

  return(
    <div>
      <div className='container center'>
        <h4>Contact Page</h4>
        <p> This my Contact page. </p>
      </div>
    </div>
  )
}

export default Contact;
