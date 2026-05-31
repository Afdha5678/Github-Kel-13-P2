import { prisma } from './src/lib/prisma'; prisma.user.findFirst().then(console.log).catch(console.error);
