import React from 'react';

// const Card = ({ name, email, id }) => { // Destructure the props right inside of the brackets
const Card = ({ name, url }) => { // Destructure the props right inside of the brackets
    // use props.name, props.email, props.id throught the code, or
    //const { name, email, id } = props;
    const getLargePhoto = (url) => {
        return url
        .replace(/&h=200/, "&h=900")
        .replace(/&w=200/, "&w=1600");       
    }
    return (
        <a href={getLargePhoto(url)} target="_blank" rel="noreferrer">
            <div className='tc dib br3 pa3 ma2 grow bw2 '>
                {/* <img alt='robot' src={`https://robohash.org/${id}?size=200x200`}/> */}
                <img className="shadow-5" alt='robot' src={url} style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                <div>
                    <p className="f3 white">{name}</p>
                    {/* <p>{email}</p> */}
                </div>
            </div>
        </a>
    );
}

export default Card;