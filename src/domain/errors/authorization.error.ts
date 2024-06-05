export class AuthorizationError extends Error {
  constructor() {
    super('Authorization error');
    this.name = 'AuthorizationError';
  }
}
