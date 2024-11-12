import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleIntoCustomerEntity1731415342029 implements MigrationInterface {
    name = 'AddRoleIntoCustomerEntity1731415342029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "role" character varying NOT NULL DEFAULT 'customer'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "role"`);
    }

}
