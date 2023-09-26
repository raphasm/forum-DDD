import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  IAnswerCommentProps,
  AnswerComment,
} from '@/domain/forum/enterprise/entities/answer-comment'

export function makeAnswerComment(
  override: Partial<IAnswerCommentProps> = {},
  id?: UniqueEntityID,
) {
  const answerComment = AnswerComment.create(
    {
      authorId: new UniqueEntityID(),
      answerId: new UniqueEntityID(),
      content: faker.lorem.sentence(),
      ...override,
    },
    id,
  )

  return answerComment
}
