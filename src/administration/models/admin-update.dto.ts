
export class AdminUpdateDto {
    nbr_total_militaire?: number;
    nbr_combattant?: number;
    nbre_logisticiens?: number;
    nbre_transmission?: number;
    nbr_genie?: number;
    nbr_navale?: number;
    nbr_aereen?: number;

    // logistiques
    nbre_camion_arme_loyale?: number;
    nbre_jeep_arme_loyale?: number;
    nbre_armement_arme_loyale?: number;
    nbre_aerienne_arme_loyale?: number;
    nbre_navale_arme_loyale?: number;

    // Social
    solde?: string;
    ration?: string;
    soins_des_sante?: string;
    attitude_des_troupes?: string;
    morale_generale_des_troupes?: string;
    hopital_Campagne_arme_loyale?: number;

    image?: string;

    rapport_generale?: string;
}