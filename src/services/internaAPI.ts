const getUsers = (prisma) => {
  try {
    return prisma.user.findMany();
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
