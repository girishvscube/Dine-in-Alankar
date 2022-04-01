import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Dish from './Dish'
import Takeawaycustomer from './Takeawaycustomer'

export default class Takeawaycart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public item_id : number

  @column()
  public quantity : number

  @column()
  public price : number

  @column()
  public takeawaycustomer_id : number

  @belongsTo(()=>Dish,{
   foreignKey  :'item_id'
  })
  public take_away_items  : BelongsTo<typeof Dish>

  @belongsTo(()=>Takeawaycustomer,{
    foreignKey  :'takeawaycustomer_id'
   })
   public take_away_customer  : BelongsTo<typeof Takeawaycustomer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
