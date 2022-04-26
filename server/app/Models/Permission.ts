import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'

export default class Permission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public role : number

  @column()
  public permissions : any

  @belongsTo(() => Role,{
    foreignKey: 'role',
  })
  public roles: BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
