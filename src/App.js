import React, { Component } from 'react';
import './App.css';
import {SearchForm, NavBar, Footer} from './components/search/'
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
          <div> 
              <SearchForm handleClick = {this.handleClick} handleKeyUp={this.handleKeyUp}  handleTitleChange = {this.handleTitleChange}/>
            </div>
            <TitleList title="Movie Titles" url = {this.state.searchUrl} fetchMovies={this.fetchMovies} changeState = {this.changeState} data={this.state.data} mounted={this.state.mounted}/>
          </div>
          <Footer/>
          </div>
    );
  }
}

export default App;
