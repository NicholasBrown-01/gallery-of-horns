// TODO: Bring in Imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';

// TODO: Create the Class - will always have a "render" method
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDesc: '',
    }
  }
 
  // ? NEW CODE BELOW //

  // MODAL METHOD TO CLOSE THE MODAL
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (desc, img) => {
    this.setState({
      showModal: true,
      selectedBeastDesc: desc,
      selectedBeastImg: img
    })
  }

    // ? NEW CODE ABOVE //

  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        <Main handleOpenModal={this.handleOpenModal} data={data}/>
        <SelectedBeast showModal={this.state.showModal} selectedBeastDesc={this.state.selectedBeastDesc} selectedBeastImg={this.state.selectedBeastImg} handleCloseModal={this.handleCloseModal}/>
        <Footer />
      </>
    )
  }
}

// TODO: Export the Class for other files to Import
export default App;