import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { IAnswersRepository } from '../repositories/answers-repository'

interface IAnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: IAnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
