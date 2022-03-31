import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Processings extends BaseSchema {
  protected tableName = 'processings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
     table.integer('item_order').references('id').inTable('item_orders').unsigned()
     table.integer('order_id').references('id').inTable('orders').unsigned()
     table.integer('total')
     table.boolean('is_done')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
