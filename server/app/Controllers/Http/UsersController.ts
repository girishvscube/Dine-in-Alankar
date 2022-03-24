import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import user from 'App/Models/user'
import Hash from '@ioc:Adonis/Core/Hash'
import Mail from '@ioc:Adonis/Addons/Mail'
export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { email, password } = await request.validate(UserValidator)
    console.log(email)
    try {
      await user.create({
        email,
        password,
      })
      return response.created({ message: 'registered succesfully' })
    } catch (err) {
      return response.badRequest({ err: err.messages })
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password1 = request.input('password')
    try {
      const { password } = await user.findByOrFail('email', `${email}`)
      const res = await Hash.verify(password, password1)
      if (res) {
        const token = await auth.attempt(email, password1)
        return response.ok(token.toJSON())
      } else {
        return response.notFound({ message: 'email or password mismatch' })
      }
    } catch (err) {
      return response.badRequest({
        message: 'something is wrong please try again later with valid credentials',
      })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response }: HttpContextContract) {
    try {
      const email = request.input('email')
      const password = request.input('password')
      const data = await user.findByOrFail('email', `${email}`)
      if (data) {
        data.password = password
        data.save()
        return response.created({ message: 'update successfully' })
      }
    } catch (err) {
      return response.notFound({ message: 'not found please provide the correct details' })
    }
  }

  public async destroy({}: HttpContextContract) {}

  


  public async sendmail() {
    await Mail.send((message) => {
        message.from('verify@gmail.com')
        .to('girisha@scube.me')
        .subject('Welcome Onboard!')
        

    })
  }


}
