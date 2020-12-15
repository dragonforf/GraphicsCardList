import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//setup vars
const firstGraphicsCard={
  model: 'Nvidia 3080',
  manufacturer: "Nvidia",
  img: 'https://i.blogs.es/0f4e3a/rtx3080-1/200_200.jpg'
}

const secondGraphicsCard = {
  model: "Nvidia 3070",
  manufacturer: 'Nvidia',
  img: 'https://www.scan.co.uk/images/products/3217723-a.jpg',
}

function GraphicsCardList(){
  return (
    <section className="graphicsCardList">
        <GraphicsCard model={firstGraphicsCard.model} manufacturer={firstGraphicsCard.manufacturer} img={firstGraphicsCard.img} />
        <GraphicsCard model={secondGraphicsCard.model} manufacturer={secondGraphicsCard.manufacturer} img={secondGraphicsCard.img} />
    </section>
  );
}

const GraphicsCard = ({img, model, manufacturer}) => {
  return (
  <article className="graphicsCard">
    <img src={img} alt="THE 3080"></img>
    <h2>{model}</h2>
    <h4>{manufacturer.toUpperCase()}</h4>
  </article>
  )};

ReactDom.render(<GraphicsCardList />, document.getElementById("root"));