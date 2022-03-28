import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subcats extends BaseSchema {
  protected tableName = 'subcats'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.integer('category_id').unsigned()
       .references('categories.id')
       .onDelete('CASCADE').notNullable()
      table.string('sub_category_name')
      table.timestamp('deleted_at', { useTz: true }).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
