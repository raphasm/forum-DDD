import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IQuestionsRepository } from '../repositories/questions-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { IQuestionCommentsRepository } from '../repositories/question-comments-repository'

interface ICommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

interface ICommentOnQuestionUseCaseResponse {
  questionComment: QuestionComment
}

export class CommentOnQuestionUseCase {
  constructor(
    private questionRepository: IQuestionsRepository,
    private questionCommentsRepository: IQuestionCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: ICommentOnQuestionUseCaseRequest): Promise<ICommentOnQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return {
      questionComment,
    }
  }
}
