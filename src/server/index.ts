import { IAuthentication } from "../interface/Auth";
import { FirebaseAuthenticationAdapter } from "./firebase/FirebaseAuthenticationAdapter";

export const authenticationService: IAuthentication =
  new FirebaseAuthenticationAdapter();
