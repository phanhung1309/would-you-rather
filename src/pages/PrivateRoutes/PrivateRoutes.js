import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const authUser = useSelector((state) => state.auth);

  const isAuth = Boolean(authUser);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
