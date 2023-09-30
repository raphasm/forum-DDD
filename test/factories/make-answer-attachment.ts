import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  AnswerAttachment,
  IAnswerAttachmentProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'
;('@/domain/forum/enterprise/entities/answer-comment')

export function makeAnswerAttachment(
  override: Partial<IAnswerAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answerAttachment
}
