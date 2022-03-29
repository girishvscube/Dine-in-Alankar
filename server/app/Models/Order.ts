import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'
import Dish from './Dish'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public item_id: number

  @column()
  public quantity : number

  @column()
  public price : number

  @column()
  public user_order_id :number

  @belongsTo(()=>UserOrder,{
    localKey : 'user_order_id'
  })
  public order_user : BelongsTo<typeof UserOrder>

  @hasMany(()=>Dish,{
  })
  public items : HasMany<typeof Dish>

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
