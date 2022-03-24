import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import Category from './Category'
export default class Dish extends compose(BaseModel,SoftDeletes) {
  @column({ isPrimary: true })
  public id: number


  @column()
  public item_name : string

  @column()
  public price : string

  @column()
  public category_id : number

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
    strategy: 'shortId',
    fields: ['item_name'],
    
  })
  public slug: string

 @belongsTo(()=>Category,{
   localKey:'category_id'
 })
 public category : BelongsTo<typeof Category>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
