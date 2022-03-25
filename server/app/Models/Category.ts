import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Dish from './Dish'
import Subcat from './Subcat'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
export default class Category extends compose(BaseModel,SoftDeletes) {
  @column({ isPrimary: true })
  public id: number
  @column()
  @slugify({
    strategy: 'shortId',
    fields: ['category_name'],
    allowUpdates:true
  })
  public slug: string
  @column()
  public category_name : string

  
 @hasMany(()=>Dish,{
 foreignKey:'category_id' 
 })
 public dishes : HasMany<typeof Dish>

 @hasMany(()=>Subcat,{
  foreignKey:'category_id' 
  })
  public subcat : HasMany<typeof Subcat>
  
 @column.dateTime()
 public deletedAt: DateTime
}
