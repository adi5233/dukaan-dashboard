import Sidebar from "../components/Sidebar";
import DashboardContainer from "../components/DashboardContainer";

const Dashboard = () => {
  return (
    <div>
      <div className="flex  bg-[#fafafa] ">
        <Sidebar />
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Dashboard;
