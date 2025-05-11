import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashedPw1 = await Bun.password.hash(process.env.USER_1_PW!)
  const hashedPw2 = await Bun.password.hash(process.env.USER_2_PW!)

  await prisma.user.upsert({
    where: {
      username: process.env.USER_1_NAME,
    },
    update: {},
    create: {
      username: process.env.USER_1_NAME,
      name: process.env.USER_1_NAME,
      password: hashedPw1,
      role: "admin"
    }
  })
  
  await prisma.user.upsert({
    where: {
      username: process.env.USER_2_NAME,
    },
    update: {},
    create: {
      username: process.env.USER_2_NAME,
      name: process.env.USER_2_NAME,
      password: hashedPw2,
      role: "user"
    }
  })
}

main().finally(() => prisma.$disconnect());