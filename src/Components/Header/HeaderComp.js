import React from "react";
import "./header.css";
import { LogoutOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function HeaderComp() {
  const logout = async () => {
    window.localStorage.removeItem("user", null);
    window.location.reload();
  };

  return (
    <div className="header">
      <div></div>
      <Tooltip title="Logout">
        <div className="logout-btn" onClick={() => logout()}>
          <LogoutOutlined fill="#fff" />
        </div>
      </Tooltip>
    </div>
  );
}

export default HeaderComp;
