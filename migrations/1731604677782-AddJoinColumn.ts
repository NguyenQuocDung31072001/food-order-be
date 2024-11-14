import { MigrationInterface, QueryRunner } from "typeorm";

export class AddJoinColumn1731604677782 implements MigrationInterface {
    name = 'AddJoinColumn1731604677782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_93f4239d0dc2abffbde62c5e696"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_112db01b7ba1465b47731a0ae91" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_112db01b7ba1465b47731a0ae91"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "customer_id" character varying`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "customerId" uuid`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_93f4239d0dc2abffbde62c5e696" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
