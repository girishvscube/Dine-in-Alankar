import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff'
export default class Table extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public table_number :number

  @column()
  public floor : string

  @column()
  public hall:string

  // @hasMany(()=>Staff,{
  // foreignKey:"table_id"
  // })
  // public staff: HasMany<typeof Staff>

  @manyToMany(()=>Staff,{
    pivotTable:'staff_tables'
    })
    public staff: ManyToMany<typeof Staff>

    

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
