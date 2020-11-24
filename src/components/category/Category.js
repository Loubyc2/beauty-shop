import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';



function Category() {
    const [state] = useStateValue()
    console.log('the category', state)
    return (
        <div>
            <h1 className='text-center' style={{ fontSize: '80px' }}>Page Comming Soon</h1>
            <Link to='/'>
                <button className='btn  d-flex mx-auto text-decoration-underline'>Go to home</button>
            </Link>
            {state.basket.map(item => (
                <div key={item.id}>
                    <img src={item.img} alt="" />
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Category
