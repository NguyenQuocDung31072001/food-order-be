import { MigrationInterface, QueryRunner } from "typeorm";

export class AddJoinColumn1731604600045 implements MigrationInterface {
    name = 'AddJoinColumn1731604600045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_4881377e8d360c1f877a379db45"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "foodId"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "food_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_56c756b2db4c7c22da58a184181" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_56c756b2db4c7c22da58a184181"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "food_id" character varying`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD "foodId" uuid`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_4881377e8d360c1f877a379db45" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
