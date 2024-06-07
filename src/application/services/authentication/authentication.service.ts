import { AuthorizationError } from '@/domain/errors/authorization.error';
import { AuthenticateUserUseCase } from '@/domain/usecases/user/authenticate-user.usecase';
import { HashComparer } from '@/application/contracts/gateways/hashcomparer.gateway';
import { TokenGenerator } from '@/application/contracts/gateways/tokengenerator.gateway';
import { LoadUserByEmailRepository } from '@/application/contracts/repos/user/user.repositories';

export class AuthenticationService implements AuthenticateUserUseCase {
  constructor(
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly tokenGenerator: TokenGenerator,
  ) {}

  async perform(
    params: AuthenticateUserUseCase.Params,
  ): Promise<AuthenticateUserUseCase.Result> {
    const user = await this.loadUserByEmailRepository.loadUserByEmail({
      email: params.email,
    });
    if (!user) throw new AuthorizationError();
    const isValid = await this.hashComparer.compare(
      params.password,
      user.password,
    );
    if (!isValid) throw new AuthorizationError();
    const token = await this.tokenGenerator.generate({
      id: user.id,
      email: user.email,
    });
    return { token };
  }
}
