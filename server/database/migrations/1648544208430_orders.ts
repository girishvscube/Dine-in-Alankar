import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('item_id').references('id').inTable('dishes').unsigned()
      table.string('name')
      table.string('phone_number')
      table.integer('number_of_people')
      table.text('instructions')
      table.integer('table_id').references('id').inTable('tables').unsigned()
      table.timestamps(false)
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
