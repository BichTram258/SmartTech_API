import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CommonExceptionsMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      await next();
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred!',
      });
    }
  }
}
