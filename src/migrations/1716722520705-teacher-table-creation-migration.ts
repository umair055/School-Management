import { MigrationInterface, QueryRunner } from 'typeorm';

export class TeacherTableCreationMigration1716722520705 implements MigrationInterface {
  name = ' TeacherTableCreationMigration1716722520705';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "teachers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "salary" integer, "qualification" character varying, "joiningDate" date, "isDeleted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" uuid NOT NULL, CONSTRAINT "REL_4d8041cbc103a5142fa2f2afad" UNIQUE ("userId"), CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "teachers" ADD CONSTRAINT "FK_4d8041cbc103a5142fa2f2afad4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "teachers" DROP CONSTRAINT "FK_4d8041cbc103a5142fa2f2afad4"`,
    );
    await queryRunner.query(`DROP TABLE "teachers"`);
  }
}
