import React, { Component } from 'react';
import './App.css';
import {SearchForm, NavBar, Footer} from './components/search/'
import TitleList from './components/search/TitleList'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      data: {},
      searchTerm: 1,
      searchUrl: "",
      mounted: false,
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.changeState = this.changeState.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.handleClick = this.handleClick.bind(this)    
  }

  apiKey = '1cad541268c420915e5a75e67a55153d'

  componentDidMount() {
    var json = require('./initial_data.json');
    if (this.state.data.length === undefined){
      this.setState({data:json})
    }
  }

  changeState(newData){
    this.setState({mounted: newData.mounted, searchUrl: newData.searchUrl})
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

   handleClick(evt){
    var searchUrl = "search/multi?api_key=" + this.apiKey + "&query=" + this.state.searchTerm
      this.setState({
        searchUrl:searchUrl
      });

      evt.preventDefault()
  }


  handleTitleChange(evt){
    
    this.setState({
      searchTerm: evt.target.value
    });

  }

  fetchMovies(){
    var requestUrl = "https://api.themoviedb.org/3/" + this.state.searchUrl
    fetch(requestUrl).then((response) => {
      return response.json();
    }).then((data) =>{
      this.setState({data:data});
    }, (err) => {
      console.log(err);
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
              <br/>
              <br/>
          <div> 
              <SearchForm handleClick = {this.handleClick} handleKeyUp={this.handleKeyUp}  handleTitleChange = {this.handleTitleChange}/>
            </div>
                            <br/>
            <TitleList title="Movie Titles" url = {this.state.searchUrl} fetchMovies={this.fetchMovies} changeState = {this.changeState} data={this.state.data} mounted={this.state.mounted}/>
          </div>
           <br/>
           <br/>
          <Footer/>
          </div>
    );
  }
}

export default App;
