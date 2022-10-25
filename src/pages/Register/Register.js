import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Form className="shadow-lg bg-body mt-lg-2 mt-4 p-3 mb-4 rounded h-100">
        <h2 className="text-center fw-bolder  text-dark py-4">SignUp</h2>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="px-4" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p className="mt-4">
        Already have an account? <Link to="/login">login</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
