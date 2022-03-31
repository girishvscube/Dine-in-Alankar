import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import FinalOrder from './FinalOrder'
import Dish from './Dish'

export default class UserOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public table_number : string

  @column()
  public phone_number : string

  @column()
  public number_of_people : number

  @column()
  public instructions : string

  @hasMany(()=>Order,{
    foreignKey : 'order_id'
  })
  public order : HasMany<typeof Order>

  @hasOne(()=>FinalOrder,{
  foreignKey:'user_id'
  })
  public final_order : HasOne<typeof FinalOrder>

  @hasMany(()=>Dish,{
   
    })
    public dish : HasMany<typeof Dish>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
