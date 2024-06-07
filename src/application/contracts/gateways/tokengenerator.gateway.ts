import { TokenPayload } from '@/domain/entities/token/token-payload.entity';

export interface TokenGenerator {
  generate: (payload: TokenPayload) => Promise<string>;
}
