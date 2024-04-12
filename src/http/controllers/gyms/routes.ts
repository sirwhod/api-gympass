import { FastifyInstance } from 'fastify'

import { verifyJwt } from '../../middlewares/verify-jwt'

export async function gymmsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)
}
