import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;

  let view = await prisma.views.findUnique({
    where: {
      slug,
    },
  });

  if (!view) {
    view = await prisma.views.create({
      data: {
        slug,
        viewCount: 1,
      },
    });
  } else {
    view = await prisma.views.update({
      where: {
        slug,
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });
  }

  return {
    view,
  };
});
