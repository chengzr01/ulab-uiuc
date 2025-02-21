import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { navBar, mainBody, getInTouch } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/home/GetInTouch.jsx";
import People from "./components/People.jsx";
import Publications from "./components/Publications.jsx";
import Courses from "./components/Courses.jsx";
import Gallery from "./components/Gallery.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

const Home = React.forwardRef((props, ref) => {
  const location = useLocation();

  const getDynamicContent = () => {
    const routeMapping = {
      "/about": <About />,
      "/people": <People />,
      "/publications": <Publications />,
      "/projects": <Projects />,
      "/courses": <Courses />,
      "/gallery": <Gallery />,
    };

    return routeMapping[location.pathname] || <About />;
  };

  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {getDynamicContent()}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
        <Route path="/about" element={<Home ref={titleRef} />} />
        <Route path="/people" element={<Home ref={titleRef} />} />
        <Route path="/publications" element={<Home ref={titleRef} />} />
        <Route path="/projects" element={<Home ref={titleRef} />} />
        <Route
          path="/projects/:projectName"
          element={<ProjectDetails ref={titleRef} />}
        />
        <Route path="/courses" element={<Home ref={titleRef} />} />
        <Route path="/gallery" element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
