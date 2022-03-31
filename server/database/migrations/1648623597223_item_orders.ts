import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ItemOrders extends BaseSchema {
  protected tableName = 'item_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('item_id').references('id').inTable('dishes').unsigned()
      table.integer('order_id').references('id').inTable('orders').unsigned()
      table.integer('quantity')
      table.integer('price')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
