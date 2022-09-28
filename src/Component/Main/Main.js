import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import './Main.css'

const Main = () => {
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
            </div>
            <div className='user'>
                <h2>User info</h2>
            </div>
        </div>
    );
};

export default Main;