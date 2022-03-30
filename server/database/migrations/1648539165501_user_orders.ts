import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserOrders extends BaseSchema {
  protected tableName = 'user_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('name')
      table.string('table_number')
      table.string('phone_number')
      table.integer('number_of_people')
      table.string('instructions')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
