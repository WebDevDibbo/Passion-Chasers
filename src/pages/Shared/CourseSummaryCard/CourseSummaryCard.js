import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CourseSummaryCard.css'

const CourseSummaryCard = ({ course }) => {
    console.log(course)
  const { title, img, details } = course;
  return (
    <div>
      <Card className="text-center">
       
        <Card.Body>
          <div className="py-3 d-flex align-items-center justify-content-between">
          <Card.Title className=" fw-bold">{title}</Card.Title>
          <FaDownload className="pdf-btn"/>
          </div>
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
