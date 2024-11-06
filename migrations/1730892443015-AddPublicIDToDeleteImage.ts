import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPublicIDToDeleteImage1730892443015 implements MigrationInterface {
    name = 'AddPublicIDToDeleteImage1730892443015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "image_public_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD "image_public_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "avatar_public_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant_information" ADD "image_public_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_information" DROP COLUMN "image_public_id"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "avatar_public_id"`);
        await queryRunner.query(`ALTER TABLE "image_food" DROP COLUMN "image_public_id"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "image_public_id"`);
    }

}
