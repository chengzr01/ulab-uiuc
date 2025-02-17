import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const phd_students = [
  { name: "Tao Feng", img: require("../assets/img/logo.png") },
  {
    name: "Peixuan Han",
    img: require("../assets/img/profiles/PeixuanHan.jpg"),
  },
  { name: "Yanru Qu", img: require("../assets/img/profiles/YanruQu.jpg") },
  { name: "Haofei Yu", img: require("../assets/img/profiles/HaofeiYu.jpg") },
];

const ms_students = [
  { name: "Zirui Cheng", img: require("../assets/img/Patagonia.jpg") },
  { name: "Zhaochen Hong", img: require("../assets/img/Patagonia.jpg") },
  { name: "Yexin Wu", img: require("../assets/img/Patagonia.jpg") },
  { name: "Jinwei Yao", img: require("../assets/img/Patagonia.jpg") },
  { name: "Kunlun Zhu", img: require("../assets/img/Patagonia.jpg") },
];

const visiting_students = [
  { name: "Matteo Boffa", img: require("../assets/img/Patagonia.jpg") },
  { name: "Zijia Liu", img: require("../assets/img/Patagonia.jpg") },
];

const People = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      {" "}
      <Container className="text-center">
        <h2 ref={ref}>People</h2>
      </Container>
      <h3>Principal Investigator</h3>
      <div>
        <img
          className="border border-secondary rounded-circle"
          src={require("../assets/img/profiles/JiaxuanYou.jpg")}
          alt="profilepicture"
          width={150}
          height={150}
          style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
        />
        <p
          className="lead"
          style={{
            marginTop: "0.5em",
            marginBottom: "0.5em",
          }}
        >
          <a href="https://cs.stanford.edu/people/jiaxuan/"> Jiaxuan You</a>
        </p>
      </div>
      <Container>
        <h3>Ph.D. Students</h3>
        <Row className="g-4">
          {phd_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <Image
                src={student.img}
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
                <a href="#">{student.name}</a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3>M.S. Students</h3>
        <Row className="g-4">
          {ms_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <Image
                src={student.img}
                alt="profilepicture"
                roundedCircle
                width={150}
                height={150}
                className="border border-secondary mt-2 mb-2"
              />
              <p className="lead mt-2 mb-2">
                <a href="#">{student.name}</a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3>Visiting Students</h3>
        <Row className="g-4">
          {visiting_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <Image
                src={student.img}
                alt="profilepicture"
                roundedCircle
                width={150}
                height={150}
                className="border border-secondary mt-2 mb-2"
              />
              <p className="lead mt-2 mb-2">
                <a href="#">{student.name}</a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3>Alumni</h3>
      </Container>
    </div>
  );
});

export default People;
