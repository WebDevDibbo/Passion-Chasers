import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CourseSummaryCard.css";


const CourseSummaryCard = ({ course }) => {
  console.log(course);
  const { title, img, details } = course;
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <Card.Title className=" fw-bold">{title}</Card.Title>
            <FaDownload className="pdf-btn" />
          </div>
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
