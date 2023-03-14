// TODO: Bring in the Imports
import React from 'react';

// TODO: Create the Class and have a Render Method
class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>💖Favorite </p>
        <img src={this.props.image_url} alt={this.props.title} width="300" height="250"/>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

// TODO: Export the Class for other Files to Import
export default HornedBeast;