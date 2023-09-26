import { Question } from '../../enterprise/entities/question'
import { IQuestionsRepository } from '../repositories/questions-repository'

interface IGetQuestionBySlugUseCaseRequest {
  slug: string
}

interface IGetQuestionBySlugUseCaseResponse {
  question: Question
}

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({
    slug,
  }: IGetQuestionBySlugUseCaseRequest): Promise<IGetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (!question) {
      throw new Error('question not found.')
    }

    return {
      question,
    }
  }
}
