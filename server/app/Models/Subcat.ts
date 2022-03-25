import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
export default class Subcat extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
