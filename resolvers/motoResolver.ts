import { Query, Resolver} from 'type-graphql'
import { Moto} from '../schemas/moto'

@Resolver((of) => Moto)
export class MotoResolver {
  private motos: Moto[] = []

  @Query((returns) => [Moto], { nullable: true})

  getTodos(): Moto[] {
    return this.motos
  }
}