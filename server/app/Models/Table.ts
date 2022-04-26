import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import User from './User'





export default class Table extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public floor: number

  @column()
  public hall: number

  @column()
  public type: number

  @column()
  public status: number

@belongsTo(() => Order, {
  foreignKey : 'order_id'
})
public orders : BelongsTo<typeof Order>

@manyToMany(() => User, {
  pivotTable: 'users_tables',
})
public users: ManyToMany<typeof User>



  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
