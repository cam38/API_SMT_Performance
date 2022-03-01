import { Field, ObjectType} from 'type-graphql'

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
  photo: Photo

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

export class Photo {

    @Field()
    id: number

    @Field()
    chemin_image: string

    @Field()
    coloris: string
}

export class Moteur{

    @Field()
    id: number

    @Field()
    type: string

    @Field()
    cylindre: number

    @Field()
    alesage_x_course: [number,number]

    @Field()
    taux_compression: string

    @Field()
    systeme_demarrage: string
}

export class Frein_et_Suspension {

    @Field()
    id: number

    @Field()
    freins_avant: string

    @Field()
    freins_arriere: string

    @Field()
    suspension_avant: string

    @Field()
    suspension_arriere: string

}

export class Performances_et_Transmission {

    @Field()
    id: number

    @Field()
    puissance_max: number

    @Field()
    transmission: string

    @Field()
    raports_vitesse: [number,number,number,number,number,number]

    @Field()
    embrayage: string
}

export class Chassis_et_Dimensions {

    @Field()
    id: number

    @Field()
    type_cadre: string

    @Field()
    chasse: number

    @Field()
    debattement: [number,number]

    @Field()
    dimensions: [number,number,number]

    @Field()
    capacite_carburant: number

    @Field()
    poids: number
}
