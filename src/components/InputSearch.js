import React from 'react';
import Aux from '../hoc/Aux';

const InputSearch = ( props ) => {
    return(
        <Aux>
            <label>
                Enter repo
                <input type="text" value={props.repo} onChange={props.onChangeRepo}></input>
            </label>
            <label>
                Enter label
                <input type="text" value={props.label} onChange={props.onChangeLabel}></input>
            </label>
            <button type="button" onClick={props.onSearch}>Buscar</button>
        </Aux>
    );
}

export default InputSearch;
