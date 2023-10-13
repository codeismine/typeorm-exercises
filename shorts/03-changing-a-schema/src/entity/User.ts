import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users", {
  schema: "codeismine",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
