import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Takeawaycarts extends BaseSchema {
  protected tableName = 'takeawaycarts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('item_id').references('id').inTable('dishes').unsigned()
      table.integer('quantity')
      table.integer('price')
      table.integer('takeawaycustomer_id').references('id').inTable('takeawaycustomers').unsigned()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
