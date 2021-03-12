import React from 'react';
import Container from '../hoc/Container';

const InputSearch = ( props ) => {
    return(
        <Container>
            <label>
                Enter repo
                <input type="text" value={props.repo} onChange={props.onChangeRepo}></input>
            </label>
            <label>
                Enter label
                <input type="text" value={props.label} onChange={props.onChangeLabel}></input>
            </label>
            <button type="button" onClick={props.onSearch}>Buscar</button>
        </Container>
    );
}

export default InputSearch;
