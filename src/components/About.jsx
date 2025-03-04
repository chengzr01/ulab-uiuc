import React from "react";
import { Container } from "react-bootstrap";

const About = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      <Container className="text-center">
        <h2 ref={ref}>About</h2>
      </Container>
      <h3>About</h3>
      <p>Welcome to UIUC U Lab!</p>
      <h3>News</h3>
      <ul>
        <li>
          (Jan 2025)<b>GrouphRouter</b> and GraphEval are accepted at ICLR 2025.
          [Paper] [Code]{" "}
        </li>
      </ul>
      <h3>Impacts</h3>
      <p>
        We actively collaborate with industry partners including Amazon and
        Meta.
      </p>
    </div>
  );
});

export default About;
