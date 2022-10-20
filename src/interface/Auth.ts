import { UserDTO } from "./user.dto";

export interface CredentialsDTO {
  email: string;
  password: string;
}

export interface IAuthentication {
  singIn: (data: CredentialsDTO) => Promise<UserDTO>;
  singOut: () => Promise<void>;
}
