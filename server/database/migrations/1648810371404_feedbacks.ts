import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Feedbacks extends BaseSchema {
  protected tableName = 'feedbacks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.integer('customer_id').references('id').inTable('orders').unsigned()
       table.integer('order_id').references('id').inTable('processings').unsigned()
       table.integer('staff').references('id').inTable('staff').unsigned()
       table.string('comments')
       table.integer('ratings')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
