// TODO: Bring in the Imports
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json'

// TODO: Create the Class and have a Render Method
class Main extends React.Component {
  render() {
    return (
      <article>
      {data.map(beast => (
        <HornedBeast title={beast.title} image_url={beast.image_url} description={beast.description}/>
      ))}
    </article>
  );
}
}


// TODO: Export the Class for other files to Import
export default Main;