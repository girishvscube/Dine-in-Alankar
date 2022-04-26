import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'

export default class Kd extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public order_id: number

  @column()
  public table_id: number

  @belongsTo(() => Order,{
    foreignKey: 'order_id',
  })
  public order: BelongsTo<typeof Order>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
