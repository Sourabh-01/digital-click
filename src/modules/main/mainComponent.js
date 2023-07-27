import React from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Dashboard from "../dashboard/dashboardComponent";
import ProjectComponent from "../project/projectComponent";
import SideDrawer from "../common/sideDrawer";

export default function Main() {
  const pathName = window.location.pathname;
  const [drawer, setDrawer] = React.useState(false);
  return (
    <div>
      <div>
        <Header handleDrawer={() => setDrawer(!drawer)} />
        <SideDrawer open={drawer} />
        {pathName.includes("dashboard") && <Dashboard />}
        {pathName.includes("project") && <ProjectComponent />}
        <Footer />
      </div>
    </div>
  );
}
