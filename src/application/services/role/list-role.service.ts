import { ListRoleRepository } from '@/application/contracts/repos/role/role.repositories';
import { ListRoleUseCase } from '@/domain/usecases/role/list-role.usecase';

export class ListRoleService implements ListRoleUseCase {
  constructor(private readonly roleRepository: ListRoleRepository) {}

  async perform(
    params: ListRoleUseCase.Params,
  ): Promise<ListRoleUseCase.Result> {
    const listRoles = this.roleRepository.listRoles(params);
    return listRoles;
  }
}
