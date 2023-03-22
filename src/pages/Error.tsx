import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavigationBar/NavBar";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log(error.status);

  return (
    <>
      <NavBar />
      <p>Erorr Page</p>
    </>
  );
};

export default ErrorPage;
