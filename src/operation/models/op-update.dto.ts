

export class OpUpdateDto {
    distance?: number;
    commandement_ennemi?: string;
    nature_ennemi?: string;
    nbre_ennemi?: number;
    attitude_ennemi?: string;
    intention_de_l_ennemi?: string;

    resultat_attendu?: string;
    materiel_de_l_ennemi?: number;
    relation_ennemi_population?: string;

    // Logistiue
    nbre_camion_arme_ennemi?: number;
    nbre_jeep_arme_ennemi?: number;
    nbre_armement_arme_ennemi?: number;
    nbre_aerienne_arme_ennemi?: number;
    nbre_navale_arme_ennemi?: number;
    nbre_blesse_militaire_ennemi?: number;
    nbre_deces_militaire_ennemi?: number;


    // Localiation
    zone_defense?: string;
    regimentMil?: string;
    province?: string;
    QG?: string;
    zone_commandement?: string;

    CommunaleUrbain?: string;
    CheferieSecteur?: string;

    image?: string;

    rapport_generale?: string;
}