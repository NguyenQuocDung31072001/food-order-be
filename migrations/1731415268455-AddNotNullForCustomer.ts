import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNotNullForCustomer1731415268455 implements MigrationInterface {
    name = 'AddNotNullForCustomer1731415268455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "fullname" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "avatar_public_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "date_of_birth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "recent_address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "permanent_address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "postal_code" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "country" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "country" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "postal_code" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "permanent_address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "recent_address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "date_of_birth" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "avatar_public_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "fullname" SET NOT NULL`);
    }

}
