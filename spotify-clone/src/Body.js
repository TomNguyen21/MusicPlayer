import React from 'react'
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
  return (
    <div className="body">
      <h1>I am the body</h1>
        <Header spotify={spotify} />
    </div>
  )
}

export default Body
