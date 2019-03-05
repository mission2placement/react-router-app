import React from 'react';

// This is a HOC which gives the component power to give random color to the text from materialize css.
// We pass the component(i.e ProspectComponent) as a prop to this and then we define our HOC.

const ColorChanger = (ProspectComponent) => {

  const color = ['red', 'blue', 'green', 'yellow', 'purple', 'violet']
  const randomColor = color[Math.floor(Math.random() * 5)];
  // materialize css use <color>-text to give text it's color so we pick the name from array randomly
  // and then concat that name to the '-text'.
  // So if randomColor = red our className variable becomes 'red-text'
  const className = randomColor + '-text';

  // We use return the ProspectComponent with the added functionality of className.
  return (props) => {
    return (
      <div className={className}>
        <ProspectComponent {...props}/>
      </div>
    )
  }
}

export default ColorChanger;
