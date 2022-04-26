import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Kds extends BaseSchema {
  protected tableName = 'kds'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('name').notNullable()
      table.integer('order_id').notNullable().references('id').inTable('orders').unsigned().onDelete('CASCADE')
      table.integer('table_id').nullable().references('id').inTable('tables').unsigned().onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
