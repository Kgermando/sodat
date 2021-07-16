import { IsNotEmpty } from "class-validator";


export class AdminCreateDto { 

    @IsNotEmpty()
    nbr_total_militaire: number;

    @IsNotEmpty()
    nbr_combattant: number;

    @IsNotEmpty()
    nbre_logisticiens: number;

    @IsNotEmpty()
    nbre_transmission: number;

    @IsNotEmpty()
    nbr_genie: number;

    @IsNotEmpty()
    nbr_navale: number;

    @IsNotEmpty()
    nbr_aereen: number;

    // logistiques
    @IsNotEmpty()
    nbre_camion_arme_loyale: number;

    @IsNotEmpty()
    nbre_jeep_arme_loyale: number;

    @IsNotEmpty()
    nbre_armement_arme_loyale: number;

    @IsNotEmpty()
    nbre_aerienne_arme_loyale: number;

    @IsNotEmpty()
    nbre_navale_arme_loyale: number;

    @IsNotEmpty()
    rapport_generale: string;

    image: string;

    @IsNotEmpty()
    created: Date;
}
