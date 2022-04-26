import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MetaOrder from './MetaOrder'
import Table from './Table'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public order_type: number

  @column()
  public total_persons: number

  @column()
  public date_of_occassion: string

  @column()
  public advance_received: string

  @column()
  public occassion: string

  @column()
  public bill_no: string


  @column()
  public payment_status: string


  @column()
  public tax: string


  @column()
  public sub_toal: string


  @column()
  public total: string

  @column()
  public delivery_date: string

  @column()
  public instructions: string

  @column()
  public table_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => MetaOrder, {
    foreignKey: 'order_id',
  })
  public meta_order: HasMany<typeof MetaOrder>

  @belongsTo(() => Table, {
    foreignKey: 'table_id',
  })
  public table: BelongsTo<typeof Table>

  
  

  static async listing(request) {
    const { page = 1, search_key = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`).orWhere('bill_no', 'LIKE', `%${search_key}%`)
    }

    return query
      .preload('meta_order',(query) => {query.preload('menus')})
      .orderBy('id', 'desc').preload('table',(query)=>{
        query.preload('users',(query)=>{
          query.preload('role')
        })
      })
      .paginate(page, limit)
  }

}
