import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff'
import Order from './Order'
import Processing from './Processing'

export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
public customer_id :number

@column()
public order_id : number

@column()
public ratings : number

@column()
public comments : string

@column()
public staff:number

@belongsTo(()=>Staff,{
  foreignKey:'staff'
})
public feedback_staff : BelongsTo<typeof Staff>

@belongsTo(()=>Order,{
  foreignKey:'customer_id'
})
public feedback_customer : BelongsTo<typeof Order>

@belongsTo(()=>Processing,{
  foreignKey:'order_id'
})
public feedback_order : BelongsTo<typeof Processing>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
