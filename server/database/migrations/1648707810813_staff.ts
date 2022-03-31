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
       table.integer('role').references('id').inTable('roles').unsigned()
       table.string('password')
       table.string('image')
       table.boolean('available')
       table.integer('table').references('id').inTable('tables').unsigned()
       table.timestamps(false)
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
