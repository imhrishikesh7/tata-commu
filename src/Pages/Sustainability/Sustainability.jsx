import React from 'react';
import './Sustainability.css';
import Cards from '../../Components/Cards/Cards';
import Strategy from './Strategy/Strategy';

const Sustainability = () => {
  const headingarr = ['SUSTAINABILITY STRATEGY', 'SUSTAINABILITY VISION', 'FY24 GOALS & PROGRESS', 'UNSUSTAINABLE DEVELOPMENT GOALS', 'MATERIALITY', 'STAKEHOLDER ENGAGEMENT'];

  return (
    <div>
      <div className='container-sustainability'>
        {headingarr.map((heading, id) => (
          <Cards key={id} heading={heading} /> // Pass the heading directly as a string
        ))}
      </div>
      <Strategy />
    </div>
  );
}

export default Sustainability;
