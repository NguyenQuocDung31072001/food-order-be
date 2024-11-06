import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultForFood1730907520756 implements MigrationInterface {
    name = 'AddDefaultForFood1730907520756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "disabled" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_favorite" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "food" ALTER COLUMN "number_of_order" SET NOT NULL`);
    }

}
