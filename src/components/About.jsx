import React from "react";
import { Container } from "react-bootstrap";
import { about, highlights, news, impacts } from "../config/About";

const NewsItem = ({ time, event }) => {
  return (
    <li>
      <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
        ({time})
      </span>
      {event}
    </li>
  );
};

const About = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
      ref={ref}
    >
      <Container>
        <h3>About</h3>
        <p>{about}</p>
      </Container>

      <Container>
        <h3>Highlights</h3>
        {/* <p>{highlights}</p> */}
      </Container>

      <Container>
        <h3>News</h3>
        <ul style={{ paddingLeft: "20px" }}>
          {news.map((item, index) => (
            <NewsItem key={index} time={item.time} event={item.event} />
          ))}
        </ul>
      </Container>

      <Container>
        <h3>Impacts</h3>
        <p>{impacts}</p>
      </Container>
    </div>
  );
});

export default About;
