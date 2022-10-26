import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './CourseCategory.css'

const CourseCategory = () => {
   
   const courses = useLoaderData()

   console.log(courses)
    return (
        <div className='singleCard'>
            
           
            {
              courses.map(course => <CourseSummaryCard
              key={course.id} course={course}
              ></CourseSummaryCard>)  
            }
            
        </div>
    );
};

export default CourseCategory;