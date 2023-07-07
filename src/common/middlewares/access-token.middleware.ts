import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AccessTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    const tokenValue: string = Array.isArray(token) ? token[0] : token;
    const decodedToken = jwt.decode(tokenValue);

    const userId = decodedToken ? decodedToken['id'] : null;

    if (!userId) {
      throw new UnauthorizedException('Forbidden');
    }
    req['userId'] = userId;
    next();
  }
}
