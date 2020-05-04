import React from 'react';


const person = (props) => {
    return (<div>
        <p>I'm {props.name} and I'm {Math.floor(Math.random() * 33)} years old!</p>
            <p>{props.children}</p>
        </div>
)
};

export default person;