import { Question } from '../../enterprise/entities/question'
import { IQuestionsRepository } from '../repositories/questions-repository'

interface IEditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

interface IEditQuestionUseCaseResponse {
  question: Question
}

export class EditQuestionUseCase {
  constructor(private questionRepository: IQuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
  }: IEditQuestionUseCaseRequest): Promise<IEditQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.title = title
    question.content = content

    await this.questionRepository.save(question)

    return {
      question,
    }
  }
}
