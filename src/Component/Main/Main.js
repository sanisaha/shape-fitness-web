import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import './Main.css'
import Exercise from '../Exercise/Exercise';

const Main = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='main'>
            <div className='exercises'>
                <div>
                    <div className='title-icon'>
                        <FontAwesomeIcon className='fa-xl' icon={faHeartPulse} />
                        <h1 title='Sound Health by Actively Performing Exercises'>
                            S H A P E
                        </h1>
                    </div>
                    <h2>Choose your activities for today</h2>
                </div>
                <div>
                    <h1>{exercises.length}</h1>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.name}
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='user'>
                <h2>User info</h2>
            </div>
        </div>
    );
};

export default Main;