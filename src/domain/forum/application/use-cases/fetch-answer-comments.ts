import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { IAnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface IFetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

interface IFetchAnswerCommentsUseCaseResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: IAnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: IFetchAnswerCommentsUseCaseRequest): Promise<IFetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return {
      answerComments,
    }
  }
}
