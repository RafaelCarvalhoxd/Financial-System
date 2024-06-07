import { Role } from '@/domain/entities/role/role.entity';

export interface ListRoleRepository {
  listRoles: (
    params: ListRoleRepository.Params,
  ) => Promise<ListRoleRepository.Result>;
}

export namespace ListRoleRepository {
  export type Params = {
    name?: string;
  };
  export type Result = Role[];
}

export interface ShowRoleRepository {
  showRole: (
    params: ShowRoleRepository.Params,
  ) => Promise<ShowRoleRepository.Result>;
}

export namespace ShowRoleRepository {
  export type Params = {
    id: string;
  };
  export type Result = Role | null;
}

export interface CreateRoleRepository {
  createRole: (
    params: CreateRoleRepository.Params,
  ) => Promise<CreateRoleRepository.Result>;
}

export namespace CreateRoleRepository {
  export type Params = {
    name: string;
  };
  export type Result = Role;
}

export interface UpdateRoleRepository {
  updateRole: (
    params: UpdateRoleRepository.Params,
  ) => Promise<UpdateRoleRepository.Result>;
}

export namespace UpdateRoleRepository {
  export type Params = {
    id: string;
    name: string;
  };
  export type Result = Role;
}

export interface DeleteRoleRepository {
  deleteRole: (
    params: DeleteRoleRepository.Params,
  ) => Promise<DeleteRoleRepository.Result>;
}

export namespace DeleteRoleRepository {
  export type Params = {
    id: string;
  };
  export type Result = void;
}

export interface FindRoleByNameRepository {
  findRoleByName: (
    params: FindRoleByNameRepository.Params,
  ) => Promise<FindRoleByNameRepository.Result>;
}

export namespace FindRoleByNameRepository {
  export type Params = {
    name: string;
  };
  export type Result = Role | null;
}
