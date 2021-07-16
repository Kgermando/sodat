import { IsNotEmpty } from "class-validator";


export class OpCreateDto {

    @IsNotEmpty()
    distance: number;

    @IsNotEmpty()
    commandement_ennemi: string;

    @IsNotEmpty()
    nature_ennemi: string;

    @IsNotEmpty()
    nbre_ennemi: number;

    @IsNotEmpty()
    attitude_ennemi: string;

    @IsNotEmpty()
    intention_de_l_ennemi: string;

    @IsNotEmpty()
    resultat_attendu: string;

    @IsNotEmpty()
    materiel_de_l_ennemi: number;

    @IsNotEmpty()
    relation_ennemi_population: string;

    // Logistiue
    @IsNotEmpty()
    nbre_camion_arme_ennemi: number;

    @IsNotEmpty()
    nbre_jeep_arme_ennemi: number;

    @IsNotEmpty()
    nbre_armement_arme_ennemi: number;

    @IsNotEmpty()
    nbre_aerienne_arme_ennemi: number;

    @IsNotEmpty()
    nbre_navale_arme_ennemi: number;

    @IsNotEmpty()
    nbre_blesse_militaire_ennemi: number;

    @IsNotEmpty()
    nbre_deces_militaire_ennemi: number;

    // Localiation

    @IsNotEmpty()
    zone_defense: string;

    @IsNotEmpty()
    regimentMil: string;

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    QG: string;

    @IsNotEmpty()
    zone_commandement: string;

    @IsNotEmpty()
    CommunaleUrbain: string;

    @IsNotEmpty()
    CheferieSecteur: string;

    @IsNotEmpty()
    rapport_generale: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    created: Date;
}