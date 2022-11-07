import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!!user) {
    return <Navigate to="/projects" replace />;
  }
  return (
    <div>
      {/* header for login can go here*/}
      {outlet}
    </div>
  );
};

export default HomeLayout;
