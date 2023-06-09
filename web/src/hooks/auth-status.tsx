import { Navigate, useLocation } from "react-router-dom";

export const AuthStatus = (props: { children: JSX.Element }) => {
  const location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return props.children;
};
