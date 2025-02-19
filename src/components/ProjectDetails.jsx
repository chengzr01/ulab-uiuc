// ./components/home/ProjectDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ProjectDetails = () => {
  const { projectName } = useParams();

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
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {pdfUrl ? (
        <div style={{ width: "80%", border: "1px solid #ccc" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </div>
      ) : (
        <p>No PDF available for this project.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
