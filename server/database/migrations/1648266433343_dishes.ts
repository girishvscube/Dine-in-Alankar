import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dishes extends BaseSchema {
  protected tableName = 'dishes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('item_name')
      table.integer('category_id').unsigned()
      .references('categories.id')
      .onDelete('CASCADE').notNullable()
      table.integer('sub_category_id').unsigned()
      .references('subcats.id')
      .onDelete('CASCADE').notNullable()
      
      table.integer('stock'),
      table.string('type_of_meal')
      table.string('slug').unique()
      table.string('image_url')
      table.string('take_away_price')
      table.string('price_in_counter')
      table.boolean('availability').defaultTo(true)
      table.timestamp('deleted_at')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
