import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IAnswersRepository } from '../repositories/answers-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { IAnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface ICommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

interface ICommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private answerRepository: IAnswersRepository,
    private answerCommentsRepository: IAnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: ICommentOnAnswerUseCaseRequest): Promise<ICommentOnAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.answerCommentsRepository.create(answerComment)

    return {
      answerComment,
    }
  }
}
