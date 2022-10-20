import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { authenticationService } from "../server";
import { appFirebase } from "../server/firebase/config";

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
  isAuthenticating: boolean;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(appFirebase), (user) => {
      if (user) {
        const email = user.email as string;
        setData({
          user: {
            email,
            name: email.split("@")[0],
          },
        });
      }

      setIsAuthenticating(false);

      // Cleanup subscription on unmount
      return () => unsubscribe();
    });
  }, []);

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
    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        login,
        logout,
        isAuthenticating,
      }}
    >
      {!isAuthenticating && children}
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
