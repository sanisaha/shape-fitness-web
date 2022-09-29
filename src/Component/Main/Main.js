import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import './Main.css'
import Exercise from '../Exercise/Exercise';
import User from '../User/User';

const Main = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {
        const newBreak = document.getElementById('break-time')
        const breakTime = localStorage.getItem('breakTime')
        newBreak.innerText = breakTime;
        setBreakTime(newBreak);
    }, [])

    const btnHandler = (exercise) => {
        const activityTime = document.getElementById('activity-time')
        const spendTime = parseInt(activityTime.innerText);
        const newTime = spendTime + exercise.time;
        activityTime.innerText = newTime;
    }
    const breakAdd = (id) => {
        const breakTime = document.getElementById('break-time');
        breakTime.innerHTML = id;
        localStorage.setItem('breakTime', id);

    }

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
                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.name}
                            exercise={exercise}
                            btnHandler={btnHandler}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='user'>
                <User
                    breakAdd={breakAdd}
                    breakTime={breakTime}
                ></User>
            </div>
        </div>
    );
};

export default Main;