import React, { Component } from 'react';
import './App.css';
import {NavBar, Footer} from './components/search/'
class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      searchTerm: 1,
      searchUrl: ""
    }
  }
   
  render() {
    
    return (
      <div className="App">
            <header className="mui-appbar mui--z1">
              <div className="mui-container">
                <NavBar  handleTitleChange = {this.handleTitleChange}/>
              </div>
            </header>
             <div id="content-wrapper" className="mui--text-center">
              <div className="mui--appbar-height">
              </div>
       
          </div>
          <Footer/>
          </div>
    );
  }
}

export default App;
