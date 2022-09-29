import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    const { breakAdd } = props;
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
                <button className='btn-break' onClick={() => breakAdd(0)}><p>0m</p></button>
                <button className='btn-break' onClick={() => breakAdd(5)}><p>5m</p></button>
                <button className='btn-break' onClick={() => breakAdd(10)}><p>10m</p></button>
                <button className='btn-break' onClick={() => breakAdd(15)}><p>15m</p></button>
                <button className='btn-break' onClick={() => breakAdd(20)}><p>20m</p></button>
            </div>
            <div>
                <h2>Activity Details</h2>
            </div>
            <div className='time-spent'>
                <h3>Activity time</h3>
                <p>
                    <span id='activity-time'>0</span> minutes
                </p>
            </div>
            <div className='time-spent'>
                <h3>Break time</h3>
                <p>
                    <span id='break-time'>0</span> minutes
                </p>
            </div>
        </div>
    );
};

export default User;