import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Menu extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public image: string

  @column()
  public price: string

  @column()
  public dinein_price: string

  @column()
  public takeaway_price: string

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public status: boolean

  @column()
  public gst: string

  @column()
  public availability_count: number

  @column()
  public category_id: number

  @column()
  public sub_category_id: number
  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? JSON.parse(value) : []
    },
  })

  @column()
  public time: string

  public meal_type: any

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category, {
    foreignKey: 'category_id',
  })
  public category: BelongsTo<typeof Category>


  @belongsTo(() => Category, {
    foreignKey: 'sub_category_id',
  })
  public sub_category: BelongsTo<typeof Category>

  static async listing(request) {
    const { page = 1, search_key = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }

    return query
      .preload('category', (query) => {
        query.select('name')
      })
      .select('id', 'name', 'image', 'created_at','availability_count','category_id','price','dinein_price','takeaway_price','time','sub_category_id')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
