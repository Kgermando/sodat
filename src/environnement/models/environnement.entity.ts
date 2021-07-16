import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Environnement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nature_incident: string;

    @Column()
    niveau_incident: string;

    @Column()
    localite: string;

    @Column()
    front: string;

    @Column()
    nbr_blesse_militaire: number;

    @Column()
    nbr_deces_militaire: number;

    @Column()
    nbr_disparus_militaire: number;

    @Column()
    nbr_deserteurs_militaire: number;

    @Column()
    nbr_captures_militaire: number;

    @Column()
    nbr_blesse_civile: number;

    @Column()
    nbr_deces_civile: number;

    @Column()
    nbr_otage_civile: number;

    
    @Column()
    nbre_camion_hors_usage_arme_loyale: number;

    @Column()
    nbre_jeep_hors_usage_arme_loyale: number;

    @Column()
    nbre_armement_hors_usage_arme_loyale: number;

    @Column()
    nbre_aerienne_hors_usage_arme_loyale: number;

    @Column()
    nbre_navale_hors_usage_arme_loyale: number;

    @Column()
    image: string;

    @Column({ type: "longtext" })
    rapport_generale: string;

    @Column()
    created: Date;
}
