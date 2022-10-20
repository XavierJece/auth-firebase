import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContextProps {
  user: any;
  token: any;
  singOut(): void;
  singIn(credenciais: ICredentials): Promise<void>;
}

interface IUser {
  email: string;
}

interface IAuthState {
  user: IUser;
  token: string;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<IAuthState>(() => {
    return {} as IAuthState;
  });

  const singIn = useCallback(async (credentials: ICredentials) => {}, []);

  const singOut = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        singIn,
        singOut,
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
