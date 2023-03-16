import Form from 'react-bootstrap/Form';



    <Form.Select aria-label="Default select example">
      <option>Sort Animals by Horns</option>
      <option value="Select an option">Select an option</option>
      <option value="All">All</option>
      <option value="2">Two</option>
      <option value="1">One</option>
    </Form.Select>


//Constructor//
class HornFilter extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      sortedData: data,
    }
  }

  //Handle Selection
  handleHornSelect = (event) => {
    let selected = event.target.value;

  if(selected === '2'){
    let newData = data.filter(num => num % 2 === 0);
      this.setState ({
        sortedData: newData
      })
  } else if(selected === '1'){
    let newData = data.filter(num => num % 2 === 1);
      this.setState({
        sortedData: newData
      })
    } else if(selected === 'All'){
      this.setState({
        sortedData: data
      })
    }
  }


}


export default HornFilter;


// DEFINE STATES AND FUNCTIONS FOR CHANGING THOSE STATES

// DEFINE SUB COMPONENTS

// PASS PROPS TO SUB COMPONENTS SO THEY CAN BE UPDATED BY PARENT

// REFLECT UPDATES TO STATES AND SHARE INFORMATION (SUCH AS BEASTDATA)