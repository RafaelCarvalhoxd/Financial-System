import { Role } from '@/domain/entities/role/role.entity';

export interface CreateRoleUseCase {
  perform(params: CreateRoleUseCase.Params): Promise<CreateRoleUseCase.Result>;
}

export namespace CreateRoleUseCase {
  export type Params = {
    name: string;
  };
  export type Result = Role;
}
