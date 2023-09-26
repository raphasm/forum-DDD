import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IAnswerProps, Answer } from '@/domain/forum/enterprise/entities/answer'

export function makeAnswer(
  override: Partial<IAnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      content: faker.lorem.text(),
      questionId: new UniqueEntityID(),
      authorId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answer
}
