import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668571920236 implements MigrationInterface {
    name = 'default1668571920236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Produtos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "preco" real NOT NULL, CONSTRAINT "PK_dfb622e114b2e5a5b7c68317451" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Produtos"`);
    }

}
