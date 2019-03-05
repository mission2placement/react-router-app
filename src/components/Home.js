import React from 'react';

// We are creating functional components because we are not storing any states over here.
// className container and center are materialzied classes to give our app a look.

const Home = () => {
  return(
    <div>
      <div className='container center'>
        <h4>Home Page</h4>
        <p> This my home page. </p>
      </div>
    </div>
  )
}

export default Home;
