import { Route, Routes } from "react-router-dom";
import { SingIn } from "../pages/singIn";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/private-page" element={<h1>Private page</h1>} />
      <Route path="*" element={<h1>Not Found :(</h1>} />
    </Routes>
  );
}
