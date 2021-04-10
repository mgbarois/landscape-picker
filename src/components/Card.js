import React from 'react';

const Card = ({ name, email, id }) => { // Destructure the props right inside of the brackets
    // use props.name, props.email, props.id throught the code, or
    //const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;