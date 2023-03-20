import { Outlet } from "react-router-dom";
import NavBar from "../components/NavigationBar/NavBar";

const RootLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default RootLayout;
