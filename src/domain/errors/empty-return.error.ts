export class EmptyReturnError extends Error {
  constructor() {
    super('Empty return');
    this.name = 'EmptyReturnError';
  }
}
