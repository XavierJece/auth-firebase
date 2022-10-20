import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface IAppProvider {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProvider) => (
  <AuthProvider>{children}</AuthProvider>
);
