import 'dotenv/config';
import { prisma } from './src/lib/prisma';
import bcrypt from 'bcrypt';

async function main() {
  const email = 'owner@apotek.com';
  const password = 'owner123';
  
  console.log(`Checking user: ${email}`);
  const user = await prisma.user.findUnique({
    where: { email }
  });
  
  if (!user) {
    console.log('User not found in DB!');
    return;
  }
  console.log('User found:', user.email, user.role);
  
  const isValid = await bcrypt.compare(password, user.password);
  console.log('Password valid?', isValid);
}

main().catch(console.error).finally(() => prisma.$disconnect());
