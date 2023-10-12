App.get("/pages/api/post.js", async (req, res) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  res.json(users);
});
