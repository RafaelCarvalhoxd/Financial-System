import { Role } from '@/domain/entities/role/role.entity';

export interface ListRoleUseCase {
  perform(): Promise<ListRoleUseCase.Result>;
}

export namespace ListRoleUseCase {
  export type Result = Role[];
}
