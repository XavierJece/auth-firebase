import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ICheckAuthorizationProps {
  children: ReactNode;
}

export const CheckAuthorization: React.FC<ICheckAuthorizationProps> = ({
  children,
}) => {
  const location = useLocation();
  const user = "null";

  // Return to top of page during navigation
  useEffect(() => {
    console.log(location.pathname);

    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!user) {
    return <Navigate to="/singIn" />;
  }

  return <>{children}</>;
};
