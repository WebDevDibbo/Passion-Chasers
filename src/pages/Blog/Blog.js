import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Release Apps Confidently.
            Boost App Engagement. Customize Your App. Authentication is used by
            a server when the server needs to know exactly who is accessing
            their information or site. Authentication is used by a client when
            the client needs to know that the server is system it claims to be.
            In authentication, the user or computer has to prove its identity to
            the server or client. Usually, authentication by a server entails
            the use of a user name and password. Other ways to authenticate can
            be through cards, retina scans, voice recognition, and fingerprints.
            Authentication by a client usually involves the server giving a
            certificate to the client in which a trusted third party such as
            Verisign or Thawte states that the server belongs to the entity
            (such as a bank) that the client expects it to. Authentication does
            not determine what tasks the individual can do or what files the
            individual can see. Authentication merely identifies and verifies
            who the person or system is.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> How does the private Route work?</Accordion.Header>
          <Accordion.Body>
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.js: Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept Asynchronous Non-blocking I/O
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
