import { CreateRoleRepository } from '@/application/contracts/repos/role/role.repositories';
import { CreateRoleUseCase } from '@/domain/usecases/role/create-role.usecase';
import { FindRoleByNameRepository } from '@/application/contracts/repos/role/role.repositories';
import { Role } from '@/domain/entities/role/role.entity';

export class CreateRoleService implements CreateRoleUseCase {
  constructor(
    private readonly roleRepository: CreateRoleRepository &
      FindRoleByNameRepository,
  ) {}
  async perform(
    params: CreateRoleUseCase.Params,
  ): Promise<CreateRoleUseCase.Result> {
    const findRoleByName = await this.roleRepository.findRoleByName({
      name: params.name,
    });
    if (findRoleByName) {
      throw new Error('Role already exists');
    }
    const createRole = await this.roleRepository.createRole(params);
    return createRole;
  }
}
