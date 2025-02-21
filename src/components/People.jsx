import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

const pi = [
  {
    name: "Jiaxuan You",
    img: require("../assets/img/profiles/JiaxuanYou.jpg"),
    link: "",
    description: "",
  },
];
const phd_students = [
  {
    name: "Tao Feng",
    img: require("../assets/img/logo.png"),
    link: "",
    description: "",
  },
  {
    name: "Peixuan Han",
    img: require("../assets/img/profiles/PeixuanHan.jpg"),
    link: "",
    description: "",
  },
  {
    name: "Yanru Qu",
    img: require("../assets/img/profiles/YanruQu.jpg"),
    link: "",
    description: "",
  },
  {
    name: "Haofei Yu",
    img: require("../assets/img/profiles/HaofeiYu.jpg"),
    link: "",
    description: "",
  },
];

const ms_students = [
  {
    name: "Zirui Cheng",
    img: require("../assets/img/profiles/ZiruiCheng.jpg"),
    link: "https://chengzr01.github.io/",
    description: "",
  },
  {
    name: "Zhaochen Hong",
    img: require("../assets/img/profiles/ZhaochenHong.jpeg"),
    link: "",
    description: "",
  },
  {
    name: "Yexin Wu",
    img: require("../assets/img/profiles/YexinWu.jpg"),
    link: "",
    description: "",
  },
  {
    name: "Jinwei Yao",
    img: require("../assets/img/profiles/JinweiYao.jpg"),
    link: "",
    description: "",
  },
  {
    name: "Kunlun Zhu",
    img: require("../assets/img/profiles/KunlunZhu.jpeg"),
    link: "",
    description: "",
  },
];

const visiting_students = [
  {
    name: "Matteo Boffa",
    img: require("../assets/img/profiles/MatteoBoffa.jpeg"),
    link: "",
    description: "Ph.D. student\nPolitecnico di Torino",
  },
  {
    name: "Zijia Liu",
    img: require("../assets/img/profiles/ZijiaLiu.jpeg"),
    link: "",
    description: "Ph.D. student\nTongji University",
  },
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
      <h3
        style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
      >
        Principal Investigator
      </h3>
      <Row className="g-4">
        {pi.map((student, index) => (
          <Col key={index} md={12} sm={6} xs={12}>
            <PeopleCard
              img={student.img}
              name={student.name}
              link={student.link}
              description={student.description}
            ></PeopleCard>
          </Col>
        ))}
      </Row>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          {" "}
          Ph.D. Students
        </h3>
        <Row className="g-4">
          {phd_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          M.S. Students
        </h3>
        <Row className="g-4">
          {ms_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          Visiting Students
        </h3>
        <Row className="g-4">
          {visiting_students.map((student, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          Alumni
        </h3>
      </Container>
    </div>
  );
});

export default People;
