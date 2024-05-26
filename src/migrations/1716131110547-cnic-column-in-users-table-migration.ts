import { MigrationInterface, QueryRunner } from 'typeorm';

export class CnicColumnInUsersTableMigration1716131110547 implements MigrationInterface {
  name = ' CnicColumnInUsersTableMigration1716131110547';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "cnic" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cnic"`);
  }
}
