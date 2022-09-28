import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, img, description, gender, time } = props.exercise;
    return (
        <div className='exercise-category'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='description'>{description}</p>
            <div className='exercise-info'>
                <p>Target group: {gender}</p>
                <p>Time Spent: {time}min</p>
            </div>
            <button className='btn-add'><p>Add today</p></button>
        </div>
    );
};

export default Exercise;