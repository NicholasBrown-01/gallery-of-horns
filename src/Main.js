// TODO: Bring in the Imports
import React from 'react';
import HornedBeast from './HornedBeast';

// TODO: Create the Class and have a Render Method
class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast />
        <HornedBeast />
        <HornedBeast />
      </>
    )
  }
}

// TODO: Export the Class for other files to Import
export default Main;