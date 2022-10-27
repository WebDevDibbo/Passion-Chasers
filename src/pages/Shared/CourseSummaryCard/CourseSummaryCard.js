import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CourseSummaryCard.css";

const CourseSummaryCard = ({ course }) => {
  console.log(course);
  const { title, img, details } = course;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="pb-3 text-center fw-bold">{title}</Card.Title>

          <Card.Img variant="top" src={img} />
          <Card.Text className="pt-4">
            {details.length > 150 ? (
              <p>
                {details.slice(0, 150) + "..."}
                <Link>Read More</Link>
              </p>
            ) : (
              { details }
            )}
          </Card.Text>
          <Link to={`/checkoutRoute/${course._id}`}>
            <Button className="me-5" variant="primary">
              Get Premium Access
            </Button>
          </Link>
          <Link to={`/coursedetails/${course._id}`}>
            <Button variant="outline-info">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;
