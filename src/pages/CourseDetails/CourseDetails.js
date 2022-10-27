import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import './CourseDetails.css'
import { FaDownload } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";


const CourseDetails = () => {
  const courseDetails = useLoaderData();
  
  const componentRef = useRef()
  const handlePdfBtn = useReactToPrint({
    content : () => componentRef.current,
    documentTitle: 'course-data'
  });
  
  return (
    <div className="courseDetails mt-3" ref={componentRef}>
      <Card>       
        <Card.Body>
        <div className="py-3 d-flex align-items-center justify-content-between">
            <Card.Title className=" fw-bold">{courseDetails.title}</Card.Title>
            <FaDownload onClick={handlePdfBtn} className="pdf-btn"/>
          </div>
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
