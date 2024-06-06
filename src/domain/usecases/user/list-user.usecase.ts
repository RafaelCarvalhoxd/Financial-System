import { User } from '@/domain/entities/user/user.entity';

export interface ListUserUseCase {
  perform(params: ListUserUseCase.Params): Promise<ListUserUseCase.Result>;
}

export namespace ListUserUseCase {
  export type Params = {
    ids?: string[];
    name?: string;
    email?: string;
    phone?: string;
    role?: string;
  };
  export type Result = User[];
}
