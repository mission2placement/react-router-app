import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

// We are creating functional components because we are not storing any states over here.
// className container and center are materialzied classes to give our app a look.

const About = () => {
  return(
    <div>
      <div className='center container'>
        <h4>About Page</h4>
        <p> This my About page. </p>
      </div>
    </div>
  )
}

export default ColorChanger(About);
