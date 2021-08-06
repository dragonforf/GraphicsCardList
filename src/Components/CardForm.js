import { useState } from "react";

export const CardForm = (props) => {
    const [state, setState] = useState({valueToSearch: ""});
    const handleSubmit = (event) => {
        event.preventDefault();
        if(state.valueToSearch){
            props.searchCard(state.valueToSearch);
            setState({valueToSearch: ""})
        }
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={(event) => setState({valueToSearch: event.target.value})}
                value={state.valueToSearch}
                placeholder="Enter a graphics card name..." />
            <input type="submit" />
        </form>
    </>
    );
}