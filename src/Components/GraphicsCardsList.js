import GraphicsCard from './GraphicsCard';

const GraphicsCardsList = (props) => {
    return (
      <section className="graphicsCardList">
        {props.theList.map( gc => {
          return <GraphicsCard key={gc.id} {...gc} />;
        })}
      </section>
    );
}

export default GraphicsCardsList;