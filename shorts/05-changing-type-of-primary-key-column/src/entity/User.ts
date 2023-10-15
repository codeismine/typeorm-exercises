import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({
    name: "user_id",
    type: "int8",
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
