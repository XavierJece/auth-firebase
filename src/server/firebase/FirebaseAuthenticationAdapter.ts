import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { CredentialsDTO, IAuthentication } from "../../interface/Auth";
import { UserDTO } from "../../interface/user.dto";

import { appFirebase } from "./config";

export class FirebaseAuthenticationAdapter implements IAuthentication {
  private authFirebase = getAuth(appFirebase);

  async singIn({ email, password }: CredentialsDTO): Promise<UserDTO> {
    const { user } = await signInWithEmailAndPassword(
      this.authFirebase,
      email,
      password
    );

    return {
      email: user.email as string,
      id: user.uid,
      avatar: user.photoURL || undefined,
      name: user.displayName || email.split("@")[0],
    };
  }
  async singOut(): Promise<void> {
    await signOut(this.authFirebase);
  }
}
