import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class Todo {
  @Field()
  id: number

  @Field()
  marque: string

  @Field()
  categorie: string

  @Field()
  modele: string

  @Field()
  coloris: string

  @Field()
  description: string
}
