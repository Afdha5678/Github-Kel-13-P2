"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./src/lib/prisma");
prisma_1.prisma.user.findFirst().then(console.log).catch(console.error);
