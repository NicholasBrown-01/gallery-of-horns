// TODO: Bring in the Imports
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';


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
      <Card style={{ width: '18rem' }}>
        <p>💖 {this.state.favorites} Favorites </p>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.title}/>
        <Card.Body>
        
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={this.handleFavorites}>Favorite</Button>
        </Card.Body>
    </Card>
    );
  }
}

// TODO: Export the Class for other Files to Import
export default HornedBeast;