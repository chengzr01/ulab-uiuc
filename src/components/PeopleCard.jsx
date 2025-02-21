import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const PeopleCard = React.forwardRef(({ img, name, link, description }, ref) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={img}
        alt="profilepicture"
        roundedCircle
        style={{
          width: "10em",
          height: "10em",
          objectFit: "cover",
        }}
        className="border border-secondary mt-2 mb-2"
      />
      <p className="lead mt-2 mb-2">
        <a href={link}>{name}</a>
      </p>
      {description ? (
        <i style={{ whiteSpace: "pre-wrap" }}>{description}</i>
      ) : null}
    </div>
  );
});

export default PeopleCard;
