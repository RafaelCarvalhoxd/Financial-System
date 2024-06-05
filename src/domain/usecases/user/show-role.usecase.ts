import { Role } from '@/domain/entities/user/role.entity';

export interface ShowRoleUseCase {
  perform(params: ShowRoleUseCase.Params): Promise<ShowRoleUseCase.Result>;
}

export namespace ShowRoleUseCase {
  export type Params = {
    id: string;
  };
  export type Result = Role;
}
