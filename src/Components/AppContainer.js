import React, { useState } from 'react';
import { CardForm } from './CardForm';
import GraphicsCardList from './GraphicsCardsList';
import { data } from '../Data/Data-GraphicsCards';


export const AppContainer = () => {
    const [graphicsCardsList, setGraphicsCardsList] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");

    const handleSearch = (valueToSearch) => {
        if(valueToSearch){
            let result = data.filter(x => x.model.includes(valueToSearch));
            if(Array.isArray(result) && result.length > 0){
                let tempArray = [];
                result.forEach(element => {
                    if(!graphicsCardsList.some(x => x.model === element.model)){
                        tempArray.push(element);
                    }
                    else{
                        console.log("The following entry already existed in the results list: ", element);
                    }
                });
                setGraphicsCardsList([...graphicsCardsList, ...tempArray]);
                setSearchedValue("");
            }
            else{
                setSearchedValue(valueToSearch);
            }
        }
    }
    return (
        <React.Fragment>
            <CardForm searchCard={handleSearch}/>
            <GraphicsCardList theList={graphicsCardsList} searchedValue={searchedValue} />
        </React.Fragment>
    );
}