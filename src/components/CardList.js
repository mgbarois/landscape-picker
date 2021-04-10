import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i} // Remember to give a unique key when donig a loop
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;