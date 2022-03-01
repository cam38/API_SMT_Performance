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

  @Field()
  moteur: Moteur

  @Field()
  freins_et_suspensions: Frein_et_Suspension

  @Field()
  performances_et_transmission: Performances_et_Transmission

  @Field()
  chassis_et_dimensions: Chassis_et_Dimensions

  @Field()
  description: string
}

//Classe correspondant à des caractéristiques du moteur
export class Moteur{

    @Field()
    type: string

    @Field()
    cylindree: number

    @Field()
    alesage_x_course: [number,number]

    @Field()
    systeme_demarrage: string
}

//Classe correspondant à des caractéristiques des freins et des suspensions du modèle
export class Frein_et_Suspension {

    @Field()
    freins_avant: string

    @Field()
    freins_arriere: string

    @Field()
    suspension_avant: string

    @Field()
    suspension_arriere: string

}

//Classe correspondant à des caractéristiques des perf/transmission du modèle
export class Performances_et_Transmission {

    @Field()
    puissance_max: number

    @Field()
    transmission: string

    @Field()
    raports_vitesse: [number,number,number,number,number,number]

    @Field()
    embrayage: string
}

//Classe correspondant à des caractéristiques du chassis et des dimensions du modèle
export class Chassis_et_Dimensions {

    @Field()
    type_cadre: string

    @Field()
    chasse: number

    @Field()
    debattement: [number,number]

    @Field()
    dimensions: [number,number,number] //Lxlxh

    @Field()
    capacite_carburant: number

    @Field()
    poids: number
}
