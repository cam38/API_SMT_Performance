import { Field, ObjectType} from 'type-graphql'

/* 
On définit un schéma pour un modèle de moto. Ici, un modèle de moto est définie à partir : 
- d'un identifiant
- d'une marque 
- d'une catégorie (tout-terrain, sport, route ...)
- d'un modèle
- d'une image du modèle de la moto
- d'une couleur
- des caractéristiques de : 1. son moteur
                            2. ses freins & suspensions
                            3. de ses performances & transmissions
                            4. de son chassis et de ses dimensions
*/

// Classe du modèle de la moto
@ObjectType()
export class Moto {
  @Field()
  id: number

  @Field()
  marque: string

  @Field()
  categorie: string

  @Field()
  modele: string

  @Field()
  photo: string

  @Field()
  coloris: string

  //caractéristiques moteur
  @Field()
  type_moteur: string

  @Field()
  cylindree: number

  @Field()
  systeme_demarrage: string

  //caractéristiques freins et suspensions
  @Field()
  freins_avant: string

  @Field()
  freins_arriere: string

  @Field()
  suspension_avant: string

  @Field()
  suspension_arriere: string

  //caractéristiques performances et transmission
  @Field()
  puissance_max: number

  @Field()
  transmission: string

  @Field()
  embrayage: string

  //caractéristiques chassis et dimensions

  @Field()
  type_cadre: string

  @Field()
  chasse: number

  @Field()
  longueur: number

  @Field()
  largeur: number

  @Field()
  hauteur: number

  @Field()
  capacite_carburant: number

  @Field()
  poids: number

  // description du modèle
  @Field()
  description: string
}
