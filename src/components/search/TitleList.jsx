import React, { Component } from 'react'
//import App from '..public/src/App';
import {Item} from '.'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import PropTypes from 'prop-types';
import {rightOverview} from '../lib/searchHelpers'




class TitleComponent extends Component{

    componentWillReceiveProps(nextProps) {

      if(nextProps.url !== this.props.url && nextProps.url!==''){
          this.props.fetchMovies()
          this.props.changeState({mounted:true,searchUrl:nextProps.url},()=>{this.fetchMovies();

          });
      } 
    }


    componentDidMount() {
      if(this.props.url !== ''){
        this.props.fetchMovies();
        this.props.changeState({mounted:true});
      }

    }



    render(){

      var titles = ''
      var movie_data = this.props.data.results
    
      if(movie_data){

          var id = 1;
          var backdrop= '';
          titles = movie_data.map((title, i, movie_data) =>{
          id = title.id;
          var retrievedTitle = rightOverview(title, 150)
          if (retrievedTitle !=="we skip too short overview"){
                var name='';
                var overview = retrievedTitle.overview.substring(0,150) + "..."
                backdrop = 'http://image.tmdb.org/t/p/original' + retrievedTitle.backdrop_path

                if(retrievedTitle.name){
                      name = retrievedTitle.name
                } 
                else {

                      name =retrievedTitle.original_title;
                }

                return(
                      
                      <Item backdrop ={backdrop} key={id} title={name} score={retrievedTitle.vote_average} overview={overview} />
                      );
                } 
          else{
            return (<div key={id}>  </div>);
          }

           });
      }


        return(                
        <div>
          <Container fluid={true}>
            <Row>
              {titles}
              <br/>
              <br/>
            </Row>
          </Container>
        </div>

            );

    }

}

TitleComponent.propTypes ={

    fetchMovies: PropTypes.func,
    url: PropTypes.string,
    changeState: PropTypes.func,
    data: PropTypes.object.isRequired,
    mounted:PropTypes.bool

}

export default TitleComponent