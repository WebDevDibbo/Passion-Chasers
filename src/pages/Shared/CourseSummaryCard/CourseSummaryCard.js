import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ course }) => {
    console.log(course)
  const { title, img, details } = course;
  return (
    <div>
      <Card className="text-center">
       
        <Card.Body>
          <Card.Title className="pb-3 fw-bold">{title}</Card.Title>
          <Card.Img variant="top" src={img} />
          <Card.Text className="pt-4">
           {
            details.length > 150 ? 
            <p>{details.slice(0,150) + '...'}<Link to='course/'>Read More</Link></p>:
            {details}
           }
          </Card.Text>
          <Button variant="primary">Get Premium Access</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;
