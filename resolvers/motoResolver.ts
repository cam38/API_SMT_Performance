import { Query, Resolver} from 'type-graphql'
import { Moto} from '../schemas/moto'

@Resolver((of) => Moto)
export class TodoResolver {
  private todos: Moto[] = []

  @Query((returns) => [Moto], { nullable: true})

  getTodos(): Moto[] {
    return this.todos
  }
}