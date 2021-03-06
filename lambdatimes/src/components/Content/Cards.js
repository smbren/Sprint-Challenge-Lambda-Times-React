import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(article => {
        return <Card cards={article} key={article.headline}/>
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}
export default Cards;