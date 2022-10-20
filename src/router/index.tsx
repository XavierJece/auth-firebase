import { Route, Routes } from "react-router-dom";
import { SingIn } from "../pages/singIn";
import { CheckAuthorization } from "./CheckAuthorization";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home não logada</h1>} />
      <Route path="/singIn" element={<SingIn />} />

      <Route
        path="/dashboard"
        element={
          <CheckAuthorization>
            <h1>Dashboard Geral</h1>
          </CheckAuthorization>
        }
      />

      <Route path="*" element={<h1>Not Found :(</h1>} />
    </Routes>
  );
}
