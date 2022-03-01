import { Query, Resolver} from 'type-graphql'
import { Todo} from '../schemas/Todo'

@Resolver((of) => Todo)
export class TodoResolver {
  private todos: Todo[] = []

  @Query((returns) => [Todo], { nullable: true})

  getTodos(): Todo[] {
    return this.todos
  }
}