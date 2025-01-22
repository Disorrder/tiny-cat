import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;

  @Column({ type: "varchar", length: 10 })
  /**
   * @description The slug of the link\
   * Slug may expire or be deleted by the user, but we wanna keep stats for it, so we can't use unique constraint
   * @example "https://tinycat.com/slug"
   */
  slug: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
