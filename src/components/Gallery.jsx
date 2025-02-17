import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const publications = [
  {
    title: "Graphrouter: A graph-based router for llm selections",
    authors: "Tao Feng, Yanzhen Shen, Jiaxuan You",
    venue: "ICLR 2025",
  },
  // Add more publications here
];

const Gallery = React.forwardRef((props, ref) => {
  return (
    <Container className="py-5">
      <h2 ref={ref} className="text-center mb-4">
        Gallery
      </h2>
    </Container>
  );
});

export default Gallery;
