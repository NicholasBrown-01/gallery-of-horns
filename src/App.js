// TODO: Bring in Imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
import HornFilter from './HornFilter';

// TODO: Create the Class - will always have a "render" method
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDesc: '',
      sortedData: data,
    }
  }

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

  ////////// ? LAB 04 HANDLE SELECT //////////

  handleHornSelect = (event) => {
    let selected = event.target.value;
    if (selected === 'One') {
      let newData = data.filter(beastobj => beastobj.horns === 1);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'Two') {
      let newData = data.filter(beastobj => beastobj.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'Three') {
      let newData = data.filter(beastobj => beastobj.horns === 3);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'Hundred') {
      let newData = data.filter(beastobj => beastobj.horns === 100);
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'All') {
      this.setState({
        sortedData: data
      })
    }
    console.log(selected);
  }

  ////////// ? LAB 04 UPDATED RENDER FOR MAIN AND HORNFILTER //////////

  render() {
    return (
      <>
        <Header />
        <HornFilter handleHornSelect={this.handleHornSelect} />
        <Main handleOpenModal={this.handleOpenModal} data={this.state.sortedData}
        />
        <SelectedBeast showModal={this.state.showModal} selectedBeastDesc={this.state.selectedBeastDesc} selectedBeastImg={this.state.selectedBeastImg} handleCloseModal={this.handleCloseModal}
        />
        <Footer />
      </>
    )
  }
}

// TODO: Export the Class for other files to Import
export default App;