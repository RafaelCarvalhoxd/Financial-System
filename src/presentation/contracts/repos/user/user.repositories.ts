import { Role } from '@/domain/entities/role/role.entity';
import { User } from '@/domain/entities/user/user.entity';

export interface ListUsersRepository {
  listUsers: (
    params: ListUsersRepository.Params,
  ) => Promise<ListUsersRepository.Result>;
}

export namespace ListUsersRepository {
  export type Params = {
    ids?: string[];
    name?: string;
    email?: string;
    phone?: string;
    role?: string;
  };
  export type Result = User[];
}

export interface ShowUserRepository {
  showUser: (
    params: ShowUserRepository.Params,
  ) => Promise<ShowUserRepository.Result>;
}

export namespace ShowUserRepository {
  export type Params = {
    id: string;
  };
  export type Result = User | null;
}

export interface CreateUserRepository {
  createUser: (
    params: CreateUserRepository.Params,
  ) => Promise<CreateUserRepository.Result>;
}

export namespace CreateUserRepository {
  export type Params = {
    id: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthdate: Date;
    rg: string;
    phone: string;
    address: string;
    role: Role;
  };
  export type Result = User;
}

export interface UpdateUserRepository {
  updateUser: (
    params: UpdateUserRepository.Params,
  ) => Promise<UpdateUserRepository.Result>;
}

export namespace UpdateUserRepository {
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
    role?: Role;
  };
  export type Result = User | null;
}

export interface DeleteUserRepository {
  deleteUser: (
    params: DeleteUserRepository.Params,
  ) => Promise<DeleteUserRepository.Result>;
}

export namespace DeleteUserRepository {
  export type Params = {
    id: string;
  };
  export type Result = boolean;
}

export interface FindUserByCPFRepository {
  findUserByCPF: (
    params: FindUserByCPFRepository.Params,
  ) => Promise<FindUserByCPFRepository.Result>;
}

export namespace FindUserByCPFRepository {
  export type Params = {
    cpf: string;
  };
  export type Result = User | undefined;
}

export interface LoadUserByEmailRepository {
  loadUserByEmail: (
    params: LoadUserByEmailRepository.Params,
  ) => Promise<LoadUserByEmailRepository.Result>;
}

export namespace LoadUserByEmailRepository {
  export type Params = {
    email: string;
  };
  export type Result = User | undefined;
}

export interface FindUserByRGRepository {
  findUserByRG: (
    params: FindUserByRGRepository.Params,
  ) => Promise<FindUserByRGRepository.Result>;
}

export namespace FindUserByRGRepository {
  export type Params = {
    rg: string;
  };
  export type Result = User | undefined;
}
