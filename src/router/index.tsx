import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import {
  Home,
  GeneralDashboard,
  SummaryDashboard,
  MonitoringDashboard,
} from "../pages/dashboard";
import { SingIn } from "../pages/singIn";
import { CheckAuthorization } from "./CheckAuthorization";
export function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/singIn"
        element={!user ? <SingIn /> : <GeneralDashboard />}
      />

      <Route
        path="/dashboard/summary"
        element={
          <CheckAuthorization>
            <SummaryDashboard />
          </CheckAuthorization>
        }
      />
      <Route
        path="/dashboard/monitoring"
        element={
          <CheckAuthorization>
            <MonitoringDashboard />
          </CheckAuthorization>
        }
      />

      <Route
        path="/dashboard"
        element={
          <CheckAuthorization>
            <GeneralDashboard />
          </CheckAuthorization>
        }
      />

      <Route path="*" element={<h1>Not Found :(</h1>} />
    </Routes>
  );
}
