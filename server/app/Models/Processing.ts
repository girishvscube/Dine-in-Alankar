import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ItemOrder from './ItemOrder'
import Order from './Order'

export default class Processing extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public item_order : number

  @column()
  public order_id :number

  @column()
  total : number

  @column()
  is_done : boolean

  @belongsTo(()=>ItemOrder,{
    foreignKey:'item_order'
  })
  public itemss : BelongsTo<typeof ItemOrder>

  @belongsTo(()=>Order,{
    foreignKey:'order_id'
  })
  public user : BelongsTo<typeof Order>

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
