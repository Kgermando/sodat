import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Social {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    solde: string;

    @Column()
    ration: string;

    @Column()
    soins_des_sante: string;

    @Column()
    attitude_des_troupes: string;

    @Column()
    morale_generale_des_troupes: string;

    @Column()
    hopital_Campagne_arme_loyale: number;

    @Column({ type: "longtext" })
    rapport_generale: string;

    @Column()
    image: string;

    @Column()
    created: Date;
}