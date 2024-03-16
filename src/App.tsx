import { Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./Pages/Layout";
import Projects from "./Pages/Projects";
import projects from "./Data/projects";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
