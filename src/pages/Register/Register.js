import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error,setError] = useState(null)
  const {createUser} = useContext(AuthContext)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name,photoURL, email, password,confirm)
    
    if(password !== confirm){
      setError('Your Password did not matched')
      return
    }

    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset()
    })
    .catch(error => {
      console.error(`error is showing${error}`)
    })
        
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="shadow-lg bg-body mt-lg-2 mt-4 p-3 mb-4 rounded h-100">
        <h2 className="text-center fw-bolder  text-dark py-4">SignUp</h2>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            
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
            
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Button className="px-4" variant="primary" type="submit">
          Sign Up
        </Button>
        <p className="text-danger mt-3">{error}</p>
      </Form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login">login</Link>
      </p>
    </div>
  );
};

export default Register;
