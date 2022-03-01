import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class Todo {
  @Field()
  id: number

  @Field()
  modele: string

  @Field()
  description: string
}
