import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'

export default class FinalOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id : number

  @column()
  public total : number

  @belongsTo(()=>UserOrder,{
    localKey:'user_id'
  })
  public user_order : BelongsTo<typeof UserOrder>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
