import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Dish from './Dish'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'

export default class Subcat extends compose(BaseModel,SoftDeletes) {
  @column({ isPrimary: true })
  public id: number


  @column()
  sub_category_name : string

  @column()
  category_id : number

  @belongsTo(()=>Category,{
    localKey:'category_id'
  })
  public category : BelongsTo<typeof Category>

  @hasMany(()=>Dish,{
    foreignKey:'sub_category_id' 
    })
    public subcat : HasMany<typeof Dish>

 
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
