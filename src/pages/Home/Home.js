import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './Home.css'

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='course mt-4'>
                {
                    courses.map(course => <CourseSummaryCard key={course.id}
                    course={course}></CourseSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;