import React from 'react';

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$32.99</span>
      <img
        src="https://cf.geekdo-images.com/medium/img/eta9_3bOSIApYNgl_bW-Mn5tykw=/fit-in/500x500/filters:no_upscale()/pic2840020.jpg"
        alt="Game Cover"
      />
    </div>
    <div className="content">
      <a href="#" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" /> 2-4&nbsp;
        <i className="icon wait" /> 60 min.
      </div>
    </div>
  </div>
);

export default GameCard;
