import { Role } from '@/domain/entities/role/role.entity';

export interface ListRoleUseCase {
  perform(params: ListRoleUseCase.Params): Promise<ListRoleUseCase.Result>;
}

export namespace ListRoleUseCase {
  export type Params = {
    name?: string;
  };
  export type Result = Role[];
}
