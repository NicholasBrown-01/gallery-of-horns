// TODO: Bring in the Imports
import React from 'react';
import HornedBeast from './HornedBeast';


// TODO: Create the Class and have a Render Method
class Main extends React.Component {
  render() {
    return (
      <article>
        {this.props.data.map(beast => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          image_url={beast.image_url} description={beast.description}
          handleOpenModal={this.props.handleOpenModal}
        />
      ))}
    </article>
  );
}
}


// TODO: Export the Class for other files to Import
export default Main;