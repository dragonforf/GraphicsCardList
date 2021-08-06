import React from 'react';

const GraphicsCard = ({img, model, manufacturer}) => {
  let clickHandler = (manufacturer) => {
    console.log(manufacturer);
  }

  return (
  <article className="graphicsCard" onMouseOver={() => {
    console.log(model);
  }}>
    <img src={img} alt=''></img>
    <h2>{model}</h2>
    <h4>{manufacturer.toUpperCase()}</h4>
    <button type="button" onClick={() => clickHandler(manufacturer)}>OK</button>
  </article>
)};

export default GraphicsCard;