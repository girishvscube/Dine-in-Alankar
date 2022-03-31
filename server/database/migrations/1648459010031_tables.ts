import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tables extends BaseSchema {
  protected tableName = 'tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('table_number')
      table.string('floor')
      table.string('hall')
    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
