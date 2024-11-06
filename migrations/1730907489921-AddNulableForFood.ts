import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNulableForFood1730907489921 implements MigrationInterface {
    name = 'AddNulableForFood1730907489921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" SET NOT NULL`);
    }

}
