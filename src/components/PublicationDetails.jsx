// ./components/home/ProjectDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Container, Card, Ratio, Row, Col } from "react-bootstrap";
import { Jumbotron } from "./migration";
import { FileText, Github, Twitter, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const projectData = {
  ResearchTown: {
    title: "ResearchTown",
    description: "Simulator of Human Research Community",
    markdownFile: require("../assets/files/researchtown.md"),
    pdfUrl: require("../assets/files/researchtown.pdf"),
  },
};

const PublicationDetails = React.forwardRef((props, ref) => {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  const videos = [
    {
      videoId: "Yz-r7KGXbyM",
      title: "Virtual Lab of AI Scientists",
      description: "James Zou (Stanford University)",
    },
  ];

  useEffect(() => {
    const importMarkdownFile = () => {
      try {
        const markdownFile = require("../assets/files/researchtown.md");

        fetch(markdownFile)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            setMarkdownContent(text);
          })
          .catch((err) => {
            console.error("Error loading markdown:", err);
          });
      } catch (err) {
        console.error("Error importing markdown:", err);
      }
    };

    importMarkdownFile();
  }, []);

  // Custom image renderer specifically for your project structure
  const ImageRenderer = ({ src, alt }) => {
    try {
      // Dynamically import images from the same assets/files directory
      const localImageSrc = require(`../assets/files/${src}`);
      return (
        <img
          src={localImageSrc}
          alt={alt}
          className="markdown-image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    } catch (err) {
      console.error(`Error loading image: ${src}`, err);
      return <span>Image not found: {src}</span>;
    }
  };

  // Alternative approach using require.context for more flexible image loading
  const imageContext = require.context(
    "../assets/files",
    false,
    /\.(png|jpe?g|gif|svg)$/
  );

  const ImageRendererWithContext = ({ src, alt }) => {
    try {
      const localImageSrc = imageContext(`${src}`);
      return (
        <img
          src={localImageSrc}
          alt={alt}
          className="markdown-image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    } catch (err) {
      console.error(`Error loading image with context: ${src}`, err);
      return <span>Image not found: {src}</span>;
    }
  };

  const TableRenderer = ({ children }) => (
    <div className="table-responsive" style={{ overflowX: "auto" }}>
      <table
        className="markdown-table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1rem",
        }}
      >
        {children}
      </table>
    </div>
  );

  return (
    <div>
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `url(${require("../assets/general/siebel.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "15em",
        }}
      >
        <div id="stars"></div>
        <Container
          className="text-center"
          style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
        >
          <h2 ref={ref} style={{ color: "white" }}>
            <b>Research Town: Simulator of Human Research Community</b>
          </h2>
          <div className="lead typist" style={{ color: "white" }}>
            Haofei Yu*, Zhaochen Hong*, Zirui Cheng*, Kunlun Zhu*, Keyang Xuan,
            Jinwei Yao, Tao Feng, Jiaxuan You
          </div>
          <div className="lead typist" style={{ color: "white" }}>
            Dec 27, 2024
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
        {" "}
        <Container>
          <Row className="g-4">
            <Col
              md={3}
              sm={6}
              xs={12}
              style={{
                textAlign: "center",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              <a
                href={"https://arxiv.org/pdf/2412.17767"}
                target="_blank"
                rel="noopener noreferrer"
                className="lead typist"
              >
                <FileText
                  style={{
                    color: "black",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}
                />
                Paper
              </a>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              style={{
                textAlign: "center",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              <a
                href={"https://github.com/ulab-uiuc/research-town"}
                target="_blank"
                rel="noopener noreferrer"
                className="lead typist"
              >
                <Github
                  style={{
                    color: "black",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}
                />
                Code
              </a>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              style={{
                textAlign: "center",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              <a
                href={"https://x.com/youjiaxuan/status/1840767158868918639"}
                target="_blank"
                rel="noopener noreferrer"
                className="lead typist"
              >
                <Twitter
                  style={{
                    color: "black",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}
                />
                Thread
              </a>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              style={{
                textAlign: "center",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              <a
                href={"mailto:ziruic4@illinois.edu"}
                target="_blank"
                rel="noopener noreferrer"
                className="lead typist"
              >
                <Mail
                  style={{
                    color: "black",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                  }}
                />
                Contact
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "3em",
          marginBottom: "3em",
        }}
      >
        <Container style={{ marginTop: "3em" }}>
          <ReactMarkdown
            remarkPlugins={[
              remarkGfm, // GitHub Flavored Markdown support
              remarkBreaks, // Support for line breaks
            ]}
            rehypePlugins={[
              rehypeRaw, // Allows HTML in markdown
              rehypeSanitize, // Sanitizes HTML to prevent XSS
            ]}
            components={{
              img: ImageRendererWithContext,
              table: TableRenderer,

              h1: ({ node, ...props }) => (
                <h1 className="custom-h1" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline ? (
                  <code
                    className={`language-${match ? match[1] : "text"}`}
                    {...props}
                  >
                    {children}
                  </code>
                ) : (
                  <code className="inline-code" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </Container>

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

        <div
          style={{
            marginTop: "1em",
            marginBottom: "1em",
            height: "45em",
            border: "1px solid #ccc",
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={require("../assets/files/researchtown.pdf")} />
          </Worker>
        </div>

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

export default PublicationDetails;
