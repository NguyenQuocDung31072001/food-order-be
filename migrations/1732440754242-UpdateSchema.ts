import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSchema1732440754242 implements MigrationInterface {
    name = 'UpdateSchema1732440754242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_487d14cf8a009be66185f25e0b4"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_64279cbb56c53620cfe5922c791"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_89726ee65618314009b279e66e8"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c"`);
        await queryRunner.query(`ALTER TABLE "billing_information" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "billing_information" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "foodId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "paymentMethodId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "voucherId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "billing_information" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" ALTER COLUMN "company_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" ALTER COLUMN "order_notes" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "order_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "food_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "payment_method_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "payment_method_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "voucher_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "voucher_id" uuid`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_d22d0e6a16810cd4910491814e9" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_e525bb428874e447f1095e5115c" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_cd7812c96209c5bdd48a6b858b0" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_451b11cb12bc07db00d19c5a511" FOREIGN KEY ("payment_method_id") REFERENCES "payment_method"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_d6ed6a38cc40cae0c9537c5f0c3" FOREIGN KEY ("voucher_id") REFERENCES "voucher"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_d6ed6a38cc40cae0c9537c5f0c3"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_451b11cb12bc07db00d19c5a511"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_cd7812c96209c5bdd48a6b858b0"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_e525bb428874e447f1095e5115c"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_d22d0e6a16810cd4910491814e9"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "voucher_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "voucher_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "payment_method_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "payment_method_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "customer_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "food_id"`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "food_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "order_id" character varying`);
        await queryRunner.query(`ALTER TABLE "billing_information" ALTER COLUMN "order_notes" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" ALTER COLUMN "company_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "billing_information" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "voucherId" uuid`);
        await queryRunner.query(`ALTER TABLE "order" ADD "paymentMethodId" uuid`);
        await queryRunner.query(`ALTER TABLE "order" ADD "customerId" uuid`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "foodId" uuid`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "billing_information" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing_information" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c" FOREIGN KEY ("voucherId") REFERENCES "voucher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_89726ee65618314009b279e66e8" FOREIGN KEY ("paymentMethodId") REFERENCES "payment_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_64279cbb56c53620cfe5922c791" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_487d14cf8a009be66185f25e0b4" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
