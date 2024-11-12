import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCascacase1731418650421 implements MigrationInterface {
    name = 'AddCascacase1731418650421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_food" DROP CONSTRAINT "FK_3a185ba6e5a2ee64a392fa6a051"`);
        await queryRunner.query(`ALTER TABLE "image_food" DROP COLUMN "foodId"`);
        await queryRunner.query(`ALTER TABLE "image_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD "food_id" uuid`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_food" DROP CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237"`);
        await queryRunner.query(`ALTER TABLE "image_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD "food_id" character varying`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD "foodId" uuid`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD CONSTRAINT "FK_3a185ba6e5a2ee64a392fa6a051" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
