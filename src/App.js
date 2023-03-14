// TODO: Bring in Imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// TODO: Create the Class - will always have a "render" method
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

// TODO: Export the Class for other files to Import
export default App;