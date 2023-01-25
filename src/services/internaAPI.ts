const getUsers = (prisma: any) => {
  try {
    return prisma.user.findMany();
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
