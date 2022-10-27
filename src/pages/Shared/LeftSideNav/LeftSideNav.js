import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const[categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://learning-app-server-xi.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='shadow-lg p-4 mt-lg-4 rounded bg-white '>
            <h2 className='mb-4 py-3'>Course Category</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}
                    
                    >
                        <Link to={`/category/${category.id}`} className='categories-link'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;