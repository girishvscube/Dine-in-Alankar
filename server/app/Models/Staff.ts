import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
import Table from './Table'

export default class Staff extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public email: string

  @column()
  public role : string

  @column()
  public phone : string

  @column()
  public password : string

  @column()
  public image :string

  @column()
  public table_id : number

  @column()
  public status : boolean

  @manyToMany(()=>Table,{
    pivotTable:'staff_tables'
  })
  public table :ManyToMany<typeof Table>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
