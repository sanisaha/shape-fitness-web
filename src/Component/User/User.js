import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = () => {
    return (
        <div className='user-information'>
            <div>
                <div className='user-name'>
                    <FontAwesomeIcon className='fa-xl' icon={faUser} />
                    <h2>Mr. Smith Row</h2>
                </div>
                <div>
                    <div className='location'>
                        <FontAwesomeIcon className='fa-lg' icon={faLocationDot} />
                        <p>London, UK</p>
                    </div>
                </div>
            </div>
            <div className='personal-info'>
                <div className='display'>
                    <h3>Weight</h3>
                    <h3>80kg</h3>
                </div>
                <div className='display'>
                    <h3>Height</h3>
                    <h3>6ft</h3>
                </div>
                <div className='display'>
                    <h3>Activity</h3>
                    <h3>Moderate</h3>
                </div>
            </div>
            <div>
                <h2>Break Period</h2>
            </div>
            <div className='break'>
                <p>0m</p>
                <p>5m</p>
                <p>10m</p>
                <p>15m</p>
                <p>20m</p>
            </div>
            <div>
                <h2>Activity Details</h2>
            </div>
            <div className='time-spent'>
                <h3>Activity time</h3>
                <p>

                </p>
            </div>
            <div className='time-spent'>
                <h3>Break time</h3>
                <p>

                </p>
            </div>
        </div>
    );
};

export default User;