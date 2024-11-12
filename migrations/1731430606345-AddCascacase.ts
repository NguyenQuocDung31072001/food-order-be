import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCascacase1731430606345 implements MigrationInterface {
    name = 'AddCascacase1731430606345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_food" DROP CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237"`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_food" DROP CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237"`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD CONSTRAINT "FK_3e8d71ffa36ee41018401ac0237" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
