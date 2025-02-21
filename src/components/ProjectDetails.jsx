// ./components/home/ProjectDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Container, Card, Ratio } from "react-bootstrap";
import { Jumbotron } from "./home/migration";
import { FileText, Github, Twitter, Mail } from "lucide-react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ProjectDetails = React.forwardRef((props, ref) => {
  const { projectName } = useParams();

  const videos = [
    {
      videoId: "Yz-r7KGXbyM",
      title: "Virtual Lab of AI Scientists",
      description: "James Zou (Stanford University)",
    },
  ];

  const projectData = {
    ResearchTown: {
      title: "ResearchTown",
      description: "Simulator of Human Research Community",
      pdfUrl: require("../assets/files/2412.17767v1.pdf"),
    },
  };

  const project = projectData[projectName] || {
    title: "Project Not Found",
    description: "This project does not exist.",
  };

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (project.pdfUrl) {
      setPdfUrl(project.pdfUrl);
    }
  }, [project]);

  return (
    <div>
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `url(${require("../assets/img/siebel.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "15em",
        }}
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h2 ref={ref} style={{ color: "white" }}>
            <b>Research Town: Simulator of Human Research Community</b>
          </h2>
          <div className="lead typist" style={{ color: "white" }}>
            Haofei Yu*, Zhaochen Hong*, Zirui Cheng*, Kunlun Zhu*, Keyang Xuan,
            Jinwei Yao, Tao Feng, Jiaxuan You
          </div>
          <div className="lead typist" style={{ color: "white" }}>
            Dec 12, 2024
          </div>
          <div>
            <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
              <FileText
                size={"1em"}
                style={{
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                  color: "white",
                }}
              />
            </a>
            <a
              href={"https://github.com/ulab-uiuc/research-town"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={"1em"}
                style={{
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                  color: "white",
                }}
              />
            </a>
            <a
              href={project.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                size={"1em"}
                style={{
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                  color: "white",
                }}
              />
            </a>
            <a href={project.email} target="_blank" rel="noopener noreferrer">
              <Mail
                size={"1em"}
                style={{
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                  color: "white",
                }}
              />
            </a>
          </div>
        </Container>
      </Jumbotron>

      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "3em",
          marginBottom: "3em",
        }}
      >
        {videos.map((video, index) => (
          <Card>
            <Ratio aspectRatio="16x9">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </Ratio>
            <Card.Body>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text>{video.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        {pdfUrl ? (
          <div
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              height: "45em",
              border: "1px solid #ccc",
            }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfUrl} />
            </Worker>
          </div>
        ) : (
          <p>No PDF available for this project.</p>
        )}
        <div
          className="citation-block"
          style={{
            backgroundColor: "#f5f5f5",
            fontFamily: "monospace",
            borderRadius: "1em",
            padding: "1em",
            color: "#333",
          }}
        >
          <pre>{`@article{yu2024researchtown,
  title={Research Town: Simulator of Human Research Community},
  author={Haofei Yu and Zhaochen Hong and Zirui Cheng and Kunlun Zhu and Keyang Xuan and Jinwei Yao and Tao Feng and Jiaxuan You},
  journal={arXiv preprint arXiv:2412.17767},
  year={2024}
}`}</pre>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(`@article{yu2024researchtown,
  title={Research Town: Simulator of Human Research Community},
  author={Haofei Yu and Zhaochen Hong and Zirui Cheng and Kunlun Zhu and Keyang Xuan and Jinwei Yao and Tao Feng and Jiaxuan You},
  journal={arXiv preprint arXiv:2412.17767},
  year={2024}
}`);
          }}
          style={{
            marginTop: "10px",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
});

export default ProjectDetails;
