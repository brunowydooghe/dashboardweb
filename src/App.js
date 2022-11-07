import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "./Components/Layout/ProtectedLayout";
import HomeLayout from "./Components/Layout/HomeLayout";
import NotFoundPage from "./Components/NotFoundPage";
import "antd/dist/antd.min.css";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
import Profile from "./Pages/profile/Profile";
import ProjectCreation from "./Pages/project/ProjectCreation";
import React from "react";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="/" element={<ProtectedLayout />}>
        <Route path="projects" element={<ProjectCreation />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
