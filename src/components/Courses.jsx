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

const Publications = React.forwardRef((props, ref) => {
  return (
    <Container className="py-5">
      <h2 ref={ref} className="text-center mb-4">
        Courses
      </h2>
      <Row className="g-4">
        <h3>CS598: Topics in LLM Agents – 2025 Spring</h3>
        <p>
          This course offers an in-depth exploration of the fascinating field of
          LLM agents. Designed as a seminar-style course, it guides students
          through the fundamental methods that power LLM agents and examines
          their practical applications in real-world contexts. We begin with an
          introduction to the core concepts of LLM agents, then delve into the
          latest research on building agents, covering topics such as memory,
          planning, reasoning, and more. We will also explore the interface
          between LLM agents and their environments, including areas like
          retrieval-augmented generation and tool learning. Finally, we will
          examine impactful applications of LLM agents, with ample opportunities
          for collaborative brainstorming sessions. The course is structured
          around reading cutting-edge research papers, student-led
          presentations, interactive discussions, and collaborative
          semester-long projects. This approach aims to foster a deep
          understanding of latest LLM agent research and equip students with
          skills to contribute the research in relevant fields.
        </p>
        <a
          target="_blank"
          href="https://github.com/ulab-uiuc/CS598-Topics-in-LLM-Agents"
        >
          Website
        </a>
        <h3>CS598: Deep Learning with Graphs – 2024 Fall</h3>
        <p>
          This course delves into the exciting field of deep learning for
          graph-structured data. This course is designed to equip students with
          an understanding of fundamental principles, classic models, and
          cutting-edge algorithms, along with practical applications. The
          curriculum will commence with an exploration of the foundationals,
          encompassing graph concepts, deep learning fundamentals, node
          embeddings, and graph neural networks. Building upon this groundwork,
          the course will progress to advanced topics, including the practical
          guide for GNN implementation, theories of graph neural networks, and
          specialized areas such as heterogeneous graphs, knowledge graphs,
          reasoning mechanisms, and subgraph mining. Moreover, the course will
          delve into contemporary applications, including graph-based
          recommender systems, generative models for graphs, graph transformers,
          and building scalable graph learning systems. The instructional
          approach will blend traditional lectures, student-led presentations,
          interactive seminar-style discussions, and collaborative semester-long
          projects. Through this multifaceted approach, students will not only
          grasp the knowledge but also develop analytical skills by reading and
          critiquing research papers, discussing and presenting ideas, and
          contributing to collaborative projects.
        </p>
        <a href="https://ulab-uiuc.github.io/CS598/" target="_blank">
          Website
        </a>
      </Row>
    </Container>
  );
});

export default Publications;
