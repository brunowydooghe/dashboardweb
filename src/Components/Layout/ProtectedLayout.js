import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import HeaderComp from "../Header/HeaderComp";
import { useAuth } from "../../Hooks/useAuth";

function ProtectedLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Footer, Sider, Content } = Layout;

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider
        style={{ position: "sticky", zIndex: 1, width: "100%" }}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={(value) => setCollapsed(value)}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Header>
          <HeaderComp />
        </Header>
        <Content style={{ overflow: "auto" }}> {outlet}</Content>
        {/* <Footer>Footer can go here</Footer> */}
      </Layout>
    </Layout>
  );
}

export default ProtectedLayout;
