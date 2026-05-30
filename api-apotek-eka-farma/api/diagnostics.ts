export default async function handler(req: any, res: any) {
  let results: Record<string, string> = {};
  
  const testRequire = (name: string, path: string) => {
    try {
      require(path);
      results[name] = 'OK';
    } catch (e: any) {
      results[name] = e.message;
    }
  };

  testRequire('express', 'express');
  testRequire('cors', 'cors');
  testRequire('bcrypt', 'bcrypt');
  testRequire('pg', 'pg');
  testRequire('@prisma/client', '@prisma/client');
  testRequire('@prisma/adapter-pg', '@prisma/adapter-pg');
  testRequire('prisma_lib', '../src/lib/prisma');
  testRequire('authRoutes', '../src/routes/authRoutes');
  testRequire('src_index', '../src/index');

  res.status(200).json(results);
}
