import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOrderEntity1734167585912 implements MigrationInterface {
    name = 'UpdateOrderEntity1734167585912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "billing_information_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "billing_information_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "UQ_2016d4b618d40737d87e991a26a" UNIQUE ("billing_information_id")`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_2016d4b618d40737d87e991a26a" FOREIGN KEY ("billing_information_id") REFERENCES "billing_information"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_2016d4b618d40737d87e991a26a"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "UQ_2016d4b618d40737d87e991a26a"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "billing_information_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "billing_information_id" character varying`);
    }

}
