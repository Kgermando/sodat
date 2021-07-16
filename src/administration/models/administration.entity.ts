import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administration {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nbr_total_militaire: number;

    @Column()
    nbr_combattant: number;

    @Column()
    nbre_logisticiens: number;

    @Column()
    nbre_transmission: number;

    @Column()
    nbr_genie: number;

    @Column()
    nbr_navale: number;

    @Column()
    nbr_aereen: number;

    @Column()
    nbre_camion_arme_loyale: number;

    @Column()
    nbre_jeep_arme_loyale: number;

    @Column()
    nbre_armement_arme_loyale: number;

    @Column()
    nbre_aerienne_arme_loyale: number;

    @Column()
    nbre_navale_arme_loyale: number;

    @Column({ type: "longtext" })
    rapport_generale: string;

    @Column()
    image: string;

    @Column()
    created: Date;
}