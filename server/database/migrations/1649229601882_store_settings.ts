import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StoreSettings extends BaseSchema {
  protected tableName = 'store_settings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('address').notNullable()
      table.string('gst_no').notNullable()
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
