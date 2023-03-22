import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavigationBar/NavBar";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <NavBar />
      <p>Erorr Page</p>
    </>
  );
};

export default ErrorPage;
