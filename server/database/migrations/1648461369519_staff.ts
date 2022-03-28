import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Staff extends BaseSchema {
  protected tableName = 'staff'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('name')
      table.string('email')
      table.string('phone')
      table.string('role')
      table.string('password')
      table.string('image')
      table.boolean('status')
      table.integer('table_id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
