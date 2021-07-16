import { IsNotEmpty } from "class-validator";


export class EnvCreateDto {

    @IsNotEmpty()
    nature_incident: string;

    @IsNotEmpty()
    niveau_incident: string;

    localite: string;
 
    front: string;

    @IsNotEmpty()
    nbr_blesse_militaire: number;

    @IsNotEmpty()
    nbr_deces_militaire: number;

    @IsNotEmpty()
    nbr_disparus_militaire: number;

    @IsNotEmpty()
    nbr_deserteurs_militaire: number;

    @IsNotEmpty()
    nbr_captures_militaire: number;

    @IsNotEmpty()
    nbr_blesse_civile: number;

    @IsNotEmpty()
    nbr_deces_civile: number;

    @IsNotEmpty()
    nbr_otage_civile: number;

    @IsNotEmpty()
    nbre_camion_hors_usage_arme_loyale: number;

    @IsNotEmpty()
    nbre_jeep_hors_usage_arme_loyale: number;

    @IsNotEmpty()
    nbre_armement_hors_usage_arme_loyale: number;

    @IsNotEmpty()
    nbre_aerienne_hors_usage_arme_loyale: number;

    @IsNotEmpty()
    nbre_navale_hors_usage_arme_loyale: number;

    image: string;

    @IsNotEmpty()
    rapport_generale: string;

    created: Date;
}
