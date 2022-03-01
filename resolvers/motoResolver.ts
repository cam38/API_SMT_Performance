import { Query, Resolver} from 'type-graphql'
import { Moto} from '../schemas/moto'

/* 
Etant donné que nous souhaitons juste exposer des modèles de moto, nous faisons juste une query request,
pas de mutations 
*/

@Resolver((of) => Moto)
export class MotoResolver {
  private motos: Moto[] = []

  //On souhaite pouvoir renvoyer nul si il n'y a pas de modèle
  @Query((returns) => [Moto], { nullable: true})

  getMotos(): Moto[] {
    return this.motos
  }
}