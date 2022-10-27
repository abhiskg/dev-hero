import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className=" bg-gray-50 py-10 dark:bg-gray-800">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
