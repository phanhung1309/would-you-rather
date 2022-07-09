import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";

const PrivateRoutes = () => {
  const { userId } = useSelector((state) => state.auth);

  const isAuth = userId !== "";

  return isAuth ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
