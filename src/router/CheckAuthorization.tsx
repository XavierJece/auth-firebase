import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";

interface ICheckAuthorizationProps {
  children: ReactNode;
}

export const CheckAuthorization: React.FC<ICheckAuthorizationProps> = ({
  children,
}) => {
  const location = useLocation();
  const { user } = useAuth();

  // Return to top of page during navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!user) {
    return <Navigate to="/singIn" />;
  }

  return <>{children}</>;
};
