import { Answer } from '../../enterprise/entities/answer'
import { IAnswersRepository } from '../repositories/answers-repository'

interface IFetchQuestionsAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface IFetchQuestionsAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionsAnswersUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    questionId,
    page,
  }: IFetchQuestionsAnswersUseCaseRequest): Promise<IFetchQuestionsAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
