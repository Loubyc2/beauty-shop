import React from 'react';
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <h1 className='text-center' style={{ fontSize: '80px' }}>Page Comming Soon</h1>
            <Link to='/'>
                <button className='btn  d-flex mx-auto text-decoration-underline'>Go to home</button>
            </Link>
        </div>
    )
}

export default Contact
