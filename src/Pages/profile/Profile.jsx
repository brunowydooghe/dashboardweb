import Card from "antd/lib/card/Card";
import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div style={{ padding: 15, width: "100%", height: "100%" }}>
      <Card title="Profile Page" className="dashboardCard">
        <div className="item">This is a demo dashboard</div>
        <div className="container">Costumized Dashboard</div>
      </Card>
    </div>
  );
}

export default Profile;
