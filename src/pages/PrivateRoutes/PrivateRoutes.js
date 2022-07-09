import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { userId } = useSelector((state) => state.auth);

  const isAuth = userId !== "";

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
