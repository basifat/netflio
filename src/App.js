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

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }


   handleKeyUp(evt){
    if (evt.key === 'Enter'){
      var searchUrl = "search/multi?api_key=" + this.apiKey + "&query=" + this.state.searchTerm
      this.setState({
        searchUrl:searchUrl
      });
      evt.preventDefault()

     }
  }


  handleTitleChange(evt){
    
    this.setState({
      searchTerm: evt.target.value
    });

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
