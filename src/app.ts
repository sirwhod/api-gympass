import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const prisma = new PrismaClient()

export const app = fastify()

prisma.user.create({
  data: {
    name: 'Rodrigo Brandão',
    email: 'rodrigo.brandao98@gmail.com',
  },
})
