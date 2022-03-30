import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StaffTables extends BaseSchema {
  protected tableName = 'staff_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
     

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.integer('table_id').unsigned().index('table_id')
       table.integer('staff_id').unsigned().index('staff_id')
       table.foreign('table_id').references('tables.id').onDelete('cascade')
       table.foreign('staff_id').references('staff.id').onDelete('cascade')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
