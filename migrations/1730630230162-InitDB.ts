import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1730630230162 implements MigrationInterface {
    name = 'InitDB1730630230162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant_information" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "image" character varying NOT NULL, "site_name" character varying NOT NULL, "copy_right" integer NOT NULL, "seo_title" character varying NOT NULL, "seo_description" character varying NOT NULL, "seo_keywords" character varying NOT NULL, CONSTRAINT "PK_9de550b0a38394e4781a682ec11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "billing_information" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "company_name" character varying NOT NULL, "province" character varying NOT NULL, "ward" character varying NOT NULL, "detail_address" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "order_notes" character varying NOT NULL, "order_id" character varying, CONSTRAINT "PK_25e42e1e9925a747e00710d9a27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_method" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_7744c2b2dd932c9cf42f2b9bc3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "image" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_favorite_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "food_id" character varying, "customer_id" character varying, "foodId" uuid, "customerId" uuid, CONSTRAINT "PK_73564296f1d68267722add9a05b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "image" character varying NOT NULL, "food_id" character varying, "foodId" uuid, CONSTRAINT "PK_ade3d5e2beef446cecc19bef14e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "order_id" character varying, "food_id" character varying, "quantity" integer NOT NULL, "orderId" uuid, "foodId" uuid, CONSTRAINT "PK_1d06dcf40410d6ddab8bc2fc2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "rate" integer NOT NULL, "comment" integer NOT NULL, "food_id" character varying, "customer_id" character varying, "foodId" uuid, "customerId" uuid, CONSTRAINT "PK_67ee8d4eb10bf7df276a6bcbd7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "amount" integer NOT NULL, "number_of_order" integer NOT NULL, "number_of_favorite" integer NOT NULL, "disabled" boolean NOT NULL, "categories_id" character varying, "categoriesId" uuid, CONSTRAINT "PK_26d12de4b6576ff08d30c281837" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "food_id" character varying, "customer_id" character varying, "quantity" integer NOT NULL, "foodId" uuid, "customerId" uuid, CONSTRAINT "PK_57033cad3ffb2f42704dd8b8f89" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "fullname" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "avatar" character varying NOT NULL, "date_of_birth" character varying NOT NULL, "recent_address" character varying NOT NULL, "permanent_address" character varying NOT NULL, "city" character varying NOT NULL, "postal_code" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "order_number" SERIAL NOT NULL, "total_charge" integer NOT NULL, "place_on" TIMESTAMP NOT NULL, "status" character varying NOT NULL DEFAULT 'ON_HOLD', "address" character varying NOT NULL, "customer_id" character varying, "billing_information_id" character varying, "payment_method_id" character varying, "voucher_id" character varying, "customerId" uuid, "paymentMethodId" uuid, "voucherId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voucher" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), "code" character varying NOT NULL, "exp_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_677ae75f380e81c2f103a57ffaf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer_favorite_food" ADD CONSTRAINT "FK_b4cccfab55eaf3417a6f47e5277" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_favorite_food" ADD CONSTRAINT "FK_30cf927c6514459b71d05cb2b55" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image_food" ADD CONSTRAINT "FK_3a185ba6e5a2ee64a392fa6a051" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_487d14cf8a009be66185f25e0b4" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_food" ADD CONSTRAINT "FK_64279cbb56c53620cfe5922c791" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating_food" ADD CONSTRAINT "FK_eb9ad5139869a5ebfc33a361bb8" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating_food" ADD CONSTRAINT "FK_7b3cc43a71f5a742ea6cc48c64c" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "food" ADD CONSTRAINT "FK_fc1b1525d8a1da52d83504d7b63" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_4881377e8d360c1f877a379db45" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_food" ADD CONSTRAINT "FK_93f4239d0dc2abffbde62c5e696" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_89726ee65618314009b279e66e8" FOREIGN KEY ("paymentMethodId") REFERENCES "payment_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c" FOREIGN KEY ("voucherId") REFERENCES "voucher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_89726ee65618314009b279e66e8"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_93f4239d0dc2abffbde62c5e696"`);
        await queryRunner.query(`ALTER TABLE "cart_food" DROP CONSTRAINT "FK_4881377e8d360c1f877a379db45"`);
        await queryRunner.query(`ALTER TABLE "food" DROP CONSTRAINT "FK_fc1b1525d8a1da52d83504d7b63"`);
        await queryRunner.query(`ALTER TABLE "rating_food" DROP CONSTRAINT "FK_7b3cc43a71f5a742ea6cc48c64c"`);
        await queryRunner.query(`ALTER TABLE "rating_food" DROP CONSTRAINT "FK_eb9ad5139869a5ebfc33a361bb8"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_64279cbb56c53620cfe5922c791"`);
        await queryRunner.query(`ALTER TABLE "order_food" DROP CONSTRAINT "FK_487d14cf8a009be66185f25e0b4"`);
        await queryRunner.query(`ALTER TABLE "image_food" DROP CONSTRAINT "FK_3a185ba6e5a2ee64a392fa6a051"`);
        await queryRunner.query(`ALTER TABLE "customer_favorite_food" DROP CONSTRAINT "FK_30cf927c6514459b71d05cb2b55"`);
        await queryRunner.query(`ALTER TABLE "customer_favorite_food" DROP CONSTRAINT "FK_b4cccfab55eaf3417a6f47e5277"`);
        await queryRunner.query(`DROP TABLE "voucher"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "cart_food"`);
        await queryRunner.query(`DROP TABLE "food"`);
        await queryRunner.query(`DROP TABLE "rating_food"`);
        await queryRunner.query(`DROP TABLE "order_food"`);
        await queryRunner.query(`DROP TABLE "image_food"`);
        await queryRunner.query(`DROP TABLE "customer_favorite_food"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "payment_method"`);
        await queryRunner.query(`DROP TABLE "billing_information"`);
        await queryRunner.query(`DROP TABLE "restaurant_information"`);
    }

}
