import { fetchLoginGoogle } from "../../redux/authentication/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (auth.user && auth.user?.stsTokenManager?.accessToken) {
      window.sessionStorage.setItem("token", auth.token);
      navigate(from, { replace: true });
    }
  }, [auth, navigate, from]);

  const handleLoginWithGoogle = () => {
    dispatch(fetchLoginGoogle());
  };

  return (
    <div>
      <h1>Hello from Login</h1>
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
