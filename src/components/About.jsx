import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

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
      <p>
        Welcome to UIUC U Lab! We focus on making AI faster, smarter, and more
        efficient. Our research covers a broad spectrum, including generative AI
        (e.g., LLMs and diffusion models), TinyML, system optimization and
        hardware design. By integrating algorithm and hardware expertise, we
        strive to push the frontiers of AI efficiency and performance.
      </p>
      <h3>News</h3>
      <ul>
        <li>
          (Jan 2025) GrouphRouter and GraphEval are accepted at ICLR 2025.
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
