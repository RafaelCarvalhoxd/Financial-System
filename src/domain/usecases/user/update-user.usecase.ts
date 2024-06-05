export interface UpdateUserUseCase {
  perform(params: UpdateUserUseCase.Params): Promise<UpdateUserUseCase.Result>;
}

export namespace UpdateUserUseCase {
  export type Params = {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    cpf?: string;
    birthdate?: Date;
    rg?: string;
    phone?: string;
    address?: string;
    role?: string;
  };
  export type Result = void;
}
