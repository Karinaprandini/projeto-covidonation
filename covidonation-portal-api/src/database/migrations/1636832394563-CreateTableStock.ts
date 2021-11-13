import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableStock1636832394563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stock',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'product_id',
            type: 'int',
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
