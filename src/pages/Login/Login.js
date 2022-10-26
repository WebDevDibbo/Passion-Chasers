import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const {googleLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = ()=>{
         googleLogin(googleProvider)
         .then(result => {
          const user = result.user;
          console.log(user)
         })
         .catch(error => console.error(error))
  }
  return (
    <div>
      <Form className="shadow-lg bg-body mt-lg-5 mt-4 p-3 mb-4 rounded h-100">
        <h2 className="text-center  text-dark py-4 fw-bolder">Login Here</h2>
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

        <Button className="px-4 mb-2" variant="primary" type="submit">
          login
        </Button>
        <ButtonGroup vertical className="d-block w-50 mx-auto">
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
         <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      </Form>
      <p className="mt-4 text-center">
        New to Passion Chasers? <Link to="/register">Create a New Account</Link>{" "}
      </p>
      
    </div>
  );
};

export default Login;
