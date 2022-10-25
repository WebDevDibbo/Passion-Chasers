import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const[categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='shadow-lg p-4 bg-body rounded'>
            <h2 className='mb-4 py-4'>Course Category:{categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}
                    
                    >
                        <Link className='categories-link'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;