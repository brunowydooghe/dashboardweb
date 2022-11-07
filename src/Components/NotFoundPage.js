import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigate = useNavigate();
  return (
    <>
      <div className="page-not-found">
        <Result
          // status="500"
          title="Page not found"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={() => navigate("/projects")}>
              Back Home
            </Button>
          }
        />
      </div>
    </>
  );
}

export default NotFoundPage;
