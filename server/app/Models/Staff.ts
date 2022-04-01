import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Table from './Table'
import Role from './Role'

export default class Staff extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  
@column()
public name : string

@column()
public email: string

@column()
public role : number

@column()
public phone : string

@column()
public password : string

@column()
public image :string

@column()
public table: number

@column()
public available : boolean

@belongsTo(()=>Table,{
  foreignKey:'table'
})
public table_staff : BelongsTo<typeof Table>

@belongsTo(()=>Role,{
  foreignKey:'role'
})
public role_staff : BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
