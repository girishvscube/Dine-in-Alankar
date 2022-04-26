import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Menu from './Menu'
import Order from './Order'
export default class MetaOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public menu_id: number

  @column()
  public category_id: number

  @column()
  public order_id: number

  @column()
  public price: string

  @column()
  public gst: string

  @column()
  public quantity: string

  @belongsTo(() => Menu, {
    foreignKey : 'menu_id'
  })
  public menus : BelongsTo<typeof Menu>

  @belongsTo(() => Order, {
    foreignKey : 'order_id'
  })
  public orders : BelongsTo<typeof Order>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
