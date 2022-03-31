import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Table from './Table'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public table_id : number

  @column()
  public phone_number : string

  @column()
  public number_of_people : number

  @column()
  public instructions : string

  @belongsTo(() => Table, {
    foreignKey: 'table_id',
  })
  public table: BelongsTo<typeof Table>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
