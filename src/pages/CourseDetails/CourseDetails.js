import React from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import './CourseDetails.css'

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  return (
    <div className="courseDetails text-center pt-3">
      <Card>
        <Card.Title className="pt-3">
            {courseDetails.title}
        </Card.Title>
        <Card.Body>
        <Card.Img variant="top" src={courseDetails.img} />
          <Card.Text className="py-3">
            {courseDetails.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
