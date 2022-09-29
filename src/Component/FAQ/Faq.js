import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='question-body'>
            <h1>Question and Answers</h1>
            <ul id='accordion'>
                <li>
                    <label htmlFor='first'>How does React work?</label>
                    <input type="radio" name='accordion' id='first' />
                    <div className='content'>
                        <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
                    </div>
                </li>
                <li>
                    <label htmlFor="second">Difference between props and state in React?</label>
                    <input type="radio" name='accordion' id='second' />
                    <div className='content'>
                        <p>Props are known as properties it can be used to pass data from one component to another while The state represents parts of an Application that can change. The state is Mutable and It is local to the component only. Props cannot be modified, read-only, and Immutable.</p>
                    </div>
                </li>
                <li>
                    <label htmlFor="third">Application of useEffect?</label>
                    <input type="radio" name='accordion' id='third' />
                    <div className='content'>
                        <p>The useEffect Hook allows you to perform side effects in your components. Other than fetching data directly it can update the DOM, and timers.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Faq;