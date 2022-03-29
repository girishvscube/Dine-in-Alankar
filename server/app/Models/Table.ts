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


  @manyToMany(()=>Staff,{
    pivotForeignKey:'table_id'
    })
    public staff: ManyToMany<typeof Staff>

    

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
