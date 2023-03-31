import React from 'react';
import Form from 'react-bootstrap/Form';


class HornFilter extends React.Component {
  render() {
    return (
      <Form.Select aria-label="Default select example" onChange={this.props.handleHornSelect}>
        <option value="Select an option">Filter by Horns</option>
        <option value="All">All</option>
        <option value="One">1</option>
        <option value="Two">2</option>
        <option value="Three">3</option>
        <option value="Hundred">100</option>
      </Form.Select> 
    )
  }
}

export default HornFilter;
