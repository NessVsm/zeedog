import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import Footer from './components/footer/footer';

class App extends Component{
  render(){
    return (
      <div className="app">
          <Navigation />
          <Footer />
      </div>
    )
  }
}

export default App;