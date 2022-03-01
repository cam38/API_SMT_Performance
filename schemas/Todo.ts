
import { Field, ObjectType, InputType } from 'type-graphql'

@ObjectType()
export class Todo {
  @Field()
  id: number

  @Field()
  modele: string

  @Field()
  description: string

}

@InputType()
export class TodoInput implements Partial<Todo> {
  @Field()
  modele: string

  @Field()
  description: string
}


type Todo {
    id: ID!
    title: String!
    description: String!
    status: Boolean!
  }
  
  input TodoInput {
    title: String!
    description: String!
  }