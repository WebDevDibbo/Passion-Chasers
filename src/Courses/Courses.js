import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../pages/Shared/CourseSummaryCard/CourseSummaryCard';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            <h2 className='text-center py-4'>All Courses</h2>

           <div className='allCourse'>
           {
                allCourses.map(course => <CourseSummaryCard
                key={course.id} course={course}></CourseSummaryCard>)
            }
           </div>
        </div>
    );
};

export default Courses;