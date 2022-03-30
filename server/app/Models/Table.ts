
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class Table extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public table_number :string

  @column()
  public floor : string

  @column()
  public hall:string
     
}
