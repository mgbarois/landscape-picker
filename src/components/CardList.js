import React from 'react';
import Card from './Card';

const CardList = ({ landscapes }) => {

    return (
        <div>
            {
                landscapes.map((user, i) => {
                    return (
                        <Card
                            key={i} // Remember to give a unique key when donig a loop
                            // id={robots[i].id}
                            // name={robots[i].name}
                            // email={robots[i].email}
                            name={landscapes[i].name}
                            url={landscapes[i].url}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;