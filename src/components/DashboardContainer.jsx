import Header from "./dashboard/Header";
import Overview from "./dashboard/Overview";
import Table from "./dashboard/Table";

const DashboardContainer = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="p-3 sm:p-8 w-full gap-8 flex flex-col">
        <Overview />
        <Table />
      </div>
    </div>
  );
};

export default DashboardContainer;
