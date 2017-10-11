import React from 'react'
import PropTypes from 'prop-types';


export const SearchForm = (props) => (

     <div> 
     <form> 
        <input  placeholder="Search a movie i.e Avatar" type ="text" onChange ={props.handleTitleChange} value={props.searchTerm}  onKeyPress ={props.handleKeyUp}/> 
         
        <button type="button" className = "button" onClick= {props.handleClick} >Search!</button>

        </form>
        </div>
         

    )


 SearchForm.propTypes ={

    handleTitleChange: PropTypes.func,
    handleKeyUp: PropTypes.func,
    searchTerm: PropTypes.string,
    handleClick: PropTypes.func,
}