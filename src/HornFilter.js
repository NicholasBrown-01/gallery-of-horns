import React from 'react';
import Form from 'react-bootstrap/Form';


class HornFilter extends React.Component {
  render() {
    return (
      <Form.Select aria-label="Default select example" onChange={this.props.handleHornSelect}>
        <option>Sort Animals by Horns</option>
        <option value="Select an option">Select an option</option>
        <option value="All">All</option>
        <option value="Two">Two</option>
        <option value="One">One</option>
      </Form.Select>
    )
  }
}

export default HornFilter;


// DEFINE STATES AND FUNCTIONS FOR CHANGING THOSE STATES

// DEFINE SUB COMPONENTS

// PASS PROPS TO SUB COMPONENTS SO THEY CAN BE UPDATED BY PARENT

// REFLECT UPDATES TO STATES AND SHARE INFORMATION (SUCH AS BEASTDATA)