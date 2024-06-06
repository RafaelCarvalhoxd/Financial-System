export interface UpdateRoleUseCase {
  perform(params: UpdateRoleUseCase.Params): Promise<UpdateRoleUseCase.Result>;
}

export namespace UpdateRoleUseCase {
  export type Params = {
    id: string;
    name: string;
  };
  export type Result = void;
}
