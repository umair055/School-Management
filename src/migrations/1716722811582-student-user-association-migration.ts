import { MigrationInterface, QueryRunner } from 'typeorm';

export class StudentsAssociationWithUsersMigration1716722811582 implements MigrationInterface {
  name = ' StudentsAssociationWithUsersMigration1716722811582';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "students" ADD "userId" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "UQ_e0208b4f964e609959aff431bf9" UNIQUE ("userId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_e0208b4f964e609959aff431bf9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_e0208b4f964e609959aff431bf9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "UQ_e0208b4f964e609959aff431bf9"`,
    );
    await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "userId"`);
  }
}
