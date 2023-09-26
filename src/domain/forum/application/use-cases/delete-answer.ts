import { IAnswersRepository } from '../repositories/answers-repository'

interface IDeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface IDeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: IAnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: IDeleteAnswerUseCaseRequest): Promise<IDeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.answerRepository.delete(answer)

    return {}
  }
}
