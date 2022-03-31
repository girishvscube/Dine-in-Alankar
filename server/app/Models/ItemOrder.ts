import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Dish from './Dish'
import Order from './Order'
export default class ItemOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public item_id : number

  @column()
  public order_id : number

  @column()
  public quantity : number

  @column()
  public price : number

 

@belongsTo(()=>Dish,{
  foreignKey:'item_id'
})
public item : BelongsTo<typeof Dish>

@belongsTo(()=>Order,{
  foreignKey:'order_id'
})
public order : BelongsTo<typeof Order>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
