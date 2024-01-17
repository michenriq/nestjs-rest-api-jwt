import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParanmId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return Number(context.switchToHttp().getRequest().params.id);
  },
);
