import {
  DeleteRoleRepository,
  ShowRoleRepository,
} from '@/application/contracts/repos/role/role.repositories';
import { EmptyReturnError } from '@/domain/errors/empty-return.error';
import { DeleteRoleUseCase } from '@/domain/usecases/role/delete-role.usecase';

export class DeleteRoleService implements DeleteRoleUseCase {
  constructor(
    private readonly roleRepository: DeleteRoleRepository & ShowRoleRepository,
  ) {}
  async perform(
    params: DeleteRoleUseCase.Params,
  ): Promise<DeleteRoleUseCase.Result> {
    const findRole = await this.roleRepository.showRole({ id: params.id });
    if (!findRole) throw new EmptyReturnError();
    const deleteRole = await this.roleRepository.deleteRole(params);
    return deleteRole;
  }
}
