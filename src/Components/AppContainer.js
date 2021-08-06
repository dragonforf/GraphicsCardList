import React, { useState } from 'react';
import { CardForm } from './CardForm';
import GraphicsCardList from './GraphicsCardsList';
import { data } from '../Data/Data-GraphicsCards';


export const AppContainer = () => {
    const [graphicsCardsList, setGraphicsCardsList] = useState([]);
    let result = [];

    const handleSearch = (valueToSearch) => {
        if(valueToSearch){
            result = data.find(x => x.model.includes(valueToSearch));
            setGraphicsCardsList([...graphicsCardsList, ]);
        }
    }
    return (
        <React.Fragment>
            <CardForm searchCard={handleSearch}/>
            <GraphicsCardList theList={graphicsCardsList} result={result}/>
        </React.Fragment>
    );
}