import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  IQuestionCommentProps,
  QuestionComment,
} from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override: Partial<IQuestionCommentProps> = {},
  id?: UniqueEntityID,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.sentence(),
      ...override,
    },
    id,
  )

  return questionComment
}
