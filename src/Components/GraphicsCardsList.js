import GraphicsCard from './GraphicsCard';
//This is a terminal test
//this is an editor test
const GraphicsCardsList = (props) => {
  let noMatchText = (props.searchedValue) ? <span style={{color: 'darkred'}}>No match found for {props.searchedValue}</span> :"";
  return (
      <section className="graphicsCardList">
        {noMatchText} 
        {props.theList.map( gc => {
          return <GraphicsCard key={gc.id} {...gc} />;
        })}
      </section>
    );
}

export default GraphicsCardsList;