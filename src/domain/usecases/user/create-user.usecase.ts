import { Role } from '@/domain/entities/role/role.entity';
import { User } from '@/domain/entities/user/user.entity';

export interface CreateUserUseCase {
  perform(params: CreateUserUseCase.Params): Promise<CreateUserUseCase.Result>;
}

export namespace CreateUserUseCase {
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
