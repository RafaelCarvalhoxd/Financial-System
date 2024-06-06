import { Role } from './role.entity';

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthdate: Date;
  rg: string;
  phone: string;
  address: string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
}
