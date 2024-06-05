import { User } from '@/domain/entities/user/user.entity';

export interface ShowUserUseCase {
  perform(params: ShowUserUseCase.Params): Promise<ShowUserUseCase.Result>;
}

export namespace ShowUserUseCase {
  export type Params = {
    id: string;
  };
  export type Result = User;
}
