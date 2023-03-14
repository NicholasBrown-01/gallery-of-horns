// TODO: Bring in the Imports
import React from 'react';
import BeastData from './BeastData';

// TODO: Create the Class and have a Render Method
class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        {BeastData.map(beast => (
          <div key={beast._id}>
            <img src={beast.image_url} alt={beast.title} width="300" height="250"/>
            <h2>{beast.title}</h2>
            <p>{beast.description}</p>
          </div>
        ))}
      </article>
    );
  }
}

// TODO: Export the Class for other Files to Import
export default HornedBeast;