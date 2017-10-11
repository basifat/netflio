import React from 'react'
import PropTypes from 'prop-types';

import Col from 'muicss/lib/react/col';
export const Item = (props) => (
        <div className="try">
        <Col md="4" className="rcorners">
            <div className="left_part"> <p > <strong> <strong> {props.title} </strong> </strong> </p> <p>{props.overview}</p> <p> <em> Ratings : {props.score}/10 </em></p></div>
            <div className="right_part"> <img alt="backdrop" src={props.backdrop} width="75" height="75" /> </div>
        </Col>
        </div>

);

Item.propTypes ={

    title: PropTypes.string,
    overview: PropTypes.string,
    score: PropTypes.number,
    backdrop: PropTypes.string
}