import React from 'react';

const Exercise = (props) => {
    const { name, img } = props.exercise;
    console.log(img);
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;