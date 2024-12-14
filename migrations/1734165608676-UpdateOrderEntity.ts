import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOrderEntity1734165608676 implements MigrationInterface {
    name = 'UpdateOrderEntity1734165608676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "place_on" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "place_on" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "status" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "place_on" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "place_on" SET NOT NULL`);
    }

}
