export interface DeleteRoleUseCase {
  perform(params: DeleteRoleUseCase.Params): Promise<DeleteRoleUseCase.Result>;
}

export namespace DeleteRoleUseCase {
  export type Params = {
    id: string;
  };
  export type Result = void;
}
