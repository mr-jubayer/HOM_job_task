import { Outlet } from "react-router";
import { NavBar } from "../components/header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export { MainLayout };
