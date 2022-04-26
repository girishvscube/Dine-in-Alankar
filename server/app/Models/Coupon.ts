import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public code: string

  @column()
  public percent: string

  @column()
  public value: string

  @column()
  public status: boolean

  @column()
  public expires_at: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
// upon_code , coupon percentage,value,status,expiry date