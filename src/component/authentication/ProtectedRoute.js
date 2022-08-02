import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { auth } = useSelector((state) => state.authentication);
  const token = window.sessionStorage.getItem('token');
  let location = useLocation();
  
  if (!auth.user && !auth.user?.stsTokenManager?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
