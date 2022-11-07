import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  let navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo"></div>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {SidebarData?.map((el) => {
          return (
            <Menu.Item
              key={el.key}
              icon={el.icon}
              onClick={() => navigate(el.to)}
            >
              {el.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
}

export default Sidebar;
