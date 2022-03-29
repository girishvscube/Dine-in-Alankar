import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import Subcat from './Subcat'
import Category from './Category'
import Order from './Order'
export default class Dish extends compose(BaseModel,SoftDeletes) {
  @column({ isPrimary: true })
  public id: number


  @column()
  public item_name : string

  @column()
  public take_away_price : string

  @column()
  public price_in_counter : string

  @column()
  public time : string

  @column()
  public category_id :number

  @column()
  public sub_category_id : number

  @column()
  public stock : number

  @column()
  public type_of_meal : string

  @column()
  public availability : boolean

  @column()
  public image_url : string


  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['item_name'],
    allowUpdates:true
    
  })
  public slug: string

 @belongsTo(()=>Subcat,{
   localKey:'sub_category_id'
 })
 public sub_category : BelongsTo<typeof Subcat>

 @belongsTo(()=>Order,{
})
public order : BelongsTo<typeof Order>

 @belongsTo(()=>Category,{
  localKey:'category_id'
})
public category : BelongsTo<typeof Category>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
