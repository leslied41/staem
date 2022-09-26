import Header from "../header";
import Bolb from "../bolb/Bolb";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Bolb />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
