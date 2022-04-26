import Menu from 'App/Models/Menu'
// import ExceptionHandler from 'App/Exceptions/Handler'
const Validator = require('validatorjs')
import NotFoundException from 'App/Exceptions/NotFoundException'
export default class MenuController {
  /**
   *
   * @param request
   * @param response
   */

  async index({ request, response }) {
    const data = await Menu.listing(request)
    response.ok(data)
    if(!data) throw new NotFoundException('Menu not found')
  }

  /**
   *
   * @param ctx
   */
  async store(ctx) {
    return this.save(ctx)
  }

  /**
   *
   * @param ctx
   */
  async update(ctx) {
    const { menu } = ctx.request
    return this.save(ctx, menu)
  }



  /**
   *
   * @param request
   *  @param response
   */
  async destroy({ request, response }) {
    const { menu } = request
    await menu.delete()
    return response.noContent()
  }

  /**
   *
   * @param ctx (request,response)
   * @param record
   */
  async save({ request, response}, record = null) {
    const rules: any = {
      name: 'required|max:150',
      time: 'required|string',
      image: 'url',
      dinein_price: 'required|string',
      takeaway_price: 'required|string',
      category_id: 'integer',
      sub_category_id: 'integer',
      meal_type: 'array|required',
      availability_count: 'integer',

    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }


    let menu: any = record
    if (menu === null) {
      menu = new Menu()
    }

    try {
      let payload = request.body()
      let meal_type = request.body().meal_type
      const meal_types = JSON.stringify(meal_type)
      console.log(meal_types);
      menu.name = payload.name
      menu.dinein_price = payload.dinein_price
      menu.price = payload.dinein_price
      if(payload.meal_type)menu.meal_type = meal_types
      menu.takeaway_price = payload.takeaway_price
      menu.category_id = payload.category_id
      if (payload.sub_category_id) menu.sub_category_id = payload.sub_category_id
      menu.availability_count = payload.availability_count || 0
      menu.image = payload.image
      menu.time = payload.time || '10-15 Min'
      
      await menu.save()

      return response.ok({
        message: 'Menu Create/Updated Successfully',
      })
    } catch (exception) {
      return response.internalServerError(exception)
    }
  }

  /**
   *
   * @param request
   * @param response
   */
  async updateStatus({ request, response }) {
    
      let { menu } = request
      const rules: any = {
        status: 'required|boolean',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      menu.status = request.body().status
      await menu.save()
      return response.ok({menu
      })
   
  }

  /**
   *
   * @param request
   * @param response
   */
  async updateAvailabilityCount({ request, response }) {
    
      let { menu } = request
      const rules: any = {
        updated_count: 'required|integer',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      menu.availability_count = request.body().updated_count
      await menu.save()
      return response.ok(menu)
  }

  public async show({ request, response }) {
    const { menu } = request
     response.ok(menu)
     if(!menu) throw new NotFoundException('Menu not found')
  }

  async searchMenu({ response, params }) {
  
      const name = params.name
      const menus = await Menu.query().where('name', 'like', `%${name}%`)
       response.ok(menus)
       if(!menus) throw new NotFoundException('Menu not found')
  }


}
