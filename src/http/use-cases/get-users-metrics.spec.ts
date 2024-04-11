import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { GetUserMetricsUseCase } from './get-users-metrics'

let checkInsRepository: InMemoryCheckInsRepository

let sut: GetUserMetricsUseCase

describe('Get user metrics use case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsUseCase(checkInsRepository)
  })

  it('should be able to get check in cont from metrics', async () => {
    await checkInsRepository.create({
      gym_id: 'gym-1',
      user_id: 'user-01',
    })
    await checkInsRepository.create({
      gym_id: 'gym-2',
      user_id: 'user-01',
    })

    const { checkInsCount } = await sut.execute({
      userId: 'user-01',
    })

    expect(checkInsCount).toEqual(2)
  })
})
