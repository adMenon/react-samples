import React from 'react';

const Card = (props) =>{
    return (
        <div className='bg-yellow grow dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt ='img' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;