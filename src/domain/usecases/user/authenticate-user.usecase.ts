export interface AuthenticateUserUseCase {
  perform: (
    params: AuthenticateUserUseCase.Params,
  ) => Promise<AuthenticateUserUseCase.Result>;
}

export namespace AuthenticateUserUseCase {
  export type Params = {
    email: string;
    password: string;
  };
  export type Result = {
    token: string;
  } | null;
}
