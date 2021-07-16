import { IsNotEmpty } from "class-validator";

export class SocialCreateDto {
    @IsNotEmpty()
    solde: string;

    @IsNotEmpty()
    ration: string;

    @IsNotEmpty()
    soins_des_sante: string;

    @IsNotEmpty()
    attitude_des_troupes: string;

    @IsNotEmpty()
    morale_generale_des_troupes: string;

    @IsNotEmpty()
    hopital_Campagne_arme_loyale: number;

    @IsNotEmpty()
    rapport_generale: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    created: Date;
}