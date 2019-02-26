import React from 'react';

const Searchbox = ({searchfield,searchchange}) => {
    return (
        <input type = 'search' placeholder = 'search robots' onChange={searchchange}/>
    );
}

export default Searchbox;