import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'
import Hash from '@ioc:Adonis/Core/Hash'
import Table from './Table'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public password: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public image: string

  @column()
  public role_id: number

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public status: boolean

  @belongsTo(() => Role, {
    foreignKey: 'role_id',
  })
  public role: BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Table, {
    pivotTable: 'users_tables',
  })
  public tables: ManyToMany<typeof Table>
  
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }


  static listing(request) {
    const {
      page = 1,
      search_key = '',
      status = '',
      created_from = '',
      created_to = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (status != '') {
      query = query.where('status', '=', status == 'true' ? 1 : 0)
    }

    if (created_from && created_to) {
      query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to)
    }

  

    if (search_key) {
      query = query
        .where('name', 'LIKE', `%${search_key}%`)
        .orWhere('phone', 'LIKE', `%${search_key}%`)
        .orWhere('email', 'LIKE', `%${search_key}%`)
    }

    return query
      .select('id', 'name', 'created_at', 'email', 'phone', 'status','role_id')
      .orderBy('id', 'desc').preload('role')
      .paginate(page, limit)
  }
}
