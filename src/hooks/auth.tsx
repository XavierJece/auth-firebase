import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { authenticationService } from "../server";

interface ICredentials {
  email: string;
  password: string;
}
interface IUser {
  email: string;
  name: string;
}

interface IAuthState {
  user: IUser;
}

interface IAuthContextProps {
  user: IUser;
  logout(): void;
  login(credenciais: ICredentials): Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<IAuthState>(() => {
    return {} as IAuthState;
  });

  const login = useCallback(async ({ email, password }: ICredentials) => {
    const { name } = await authenticationService.singIn({
      email,
      password,
    });

    setData({
      user: {
        email,
        name,
      },
    });
  }, []);

  const logout = useCallback(async () => {
    await authenticationService.singOut();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an Auth.");
  }

  return context;
};
