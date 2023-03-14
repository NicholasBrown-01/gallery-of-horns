// TODO: Bring in the Imports
import React from 'react';

// TODO: Create the Class and have a Render Method...ADD Constructor and Super
class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      favorites: 0,
    }
  }

// TODO: Method to update favorites for each picure

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }



  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>💖 {this.state.favorites} Favorites </p>
        <img src={this.props.image_url} alt={this.props.title} onClick={this.handleFavorites} width="300" height="250"/>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

// TODO: Export the Class for other Files to Import
export default HornedBeast;