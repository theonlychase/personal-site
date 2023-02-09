import { type Views } from '@prisma/client';

export type ViewCount = OptionalExceptFor<Views, 'viewCount' | 'createdAt'>;
