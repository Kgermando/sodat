import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    distance: number;

    @Column()
    commandement_ennemi: string;

    @Column()
    nature_ennemi: string;

    @Column()
    nbre_ennemi: number;

    @Column()
    attitude_ennemi: string;

    @Column()
    intention_de_l_ennemi: string;

    @Column()
    resultat_attendu: string;

    @Column()
    materiel_de_l_ennemi: number;

    @Column()
    relation_ennemi_population: string;

    // Logistiue
    @Column()
    nbre_camion_arme_ennemi: number;

    @Column()
    nbre_jeep_arme_ennemi: number;

    @Column()
    nbre_armement_arme_ennemi: number;

    @Column()
    nbre_aerienne_arme_ennemi: number;

    @Column()
    nbre_navale_arme_ennemi: number;

    @Column()
    nbre_blesse_militaire_ennemi: number;

    @Column()
    nbre_deces_militaire_ennemi: number;

    @Column()
    zone_defense: string;

    @Column()
    regimentMil: string;

    @Column()
    province: string;

    @Column()
    QG: string;

    @Column()
    zone_commandement: string;

    @Column()
    CommunaleUrbain: string;

    @Column()
    CheferieSecteur: string;

    @Column({ type: "longtext" })
    rapport_generale: string;

    @Column()
    image: string;

    @Column()
    created: Date;
}