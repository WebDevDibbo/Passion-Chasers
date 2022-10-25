import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="shadow mt-lg-5 mt-4 p-3 mb-4 border border-warning rounded h-100">
      <Form>
        <h2 className="text-center  text-dark py-4">Login Here</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        
        <Button className="px-4" variant="primary" type="submit">
          login
        </Button>
      </Form>
      <p className="mt-4">New to Passion Chasers? <Link to='/register'>Create a New Account</Link> </p>
      </div>
  );
};

export default Login;
