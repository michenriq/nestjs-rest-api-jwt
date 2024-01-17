import {
  ExecutionContext,
  createParamDecorator,
  NotFoundException,
} from '@nestjs/common';
import {} from 'rxjs';

export const User = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (user) {
      if (filter) {
        return request.user[filter];
      }
      return request.user;
    }

    throw new NotFoundException(
      'User does not exists in the request session. Use the AuthGuard to access it',
    );
  },
);
