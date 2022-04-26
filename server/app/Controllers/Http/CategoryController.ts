import Category from 'App/Models/Category'
const Validator = require('validatorjs')

export default class CategoryController {
  /**
   *
   * @param request
   * @param response
   */
  async index({ request, response }) {
    const data = await Category.listing(request)
    return response.ok({
      data: data,
    })
  }

  /**
   *
   * @param ctx
   */
  async store(ctx) {
    return this.save(ctx)
  }

  async show({ request, response }) {
    const { category } = request
    return response.json({
      message: 'Categoty',
      data: category
    })
  }

  /**
   *
   * @param ctx
   */
  async update(ctx) {
    const { category } = ctx.request
    return this.save(ctx, category)
  }

  /**
   *
   * @param request
   *  @param response
   */
  async destroy({ request, response }) {
    try {
      const { category } = request
      await category.delete()
      return response.ok({ message: 'Category Deleted Successfully' })
    } catch (exception) {
      return response.internalServerError(exception.message)
    }
  }

  /**
   *
   * @param ctx (request,response)
   * @param record
   */
  async save({ request, response }, record = null) {
    const rules: any = {
      'name': 'required|max:150',
      'image': 'url',
      'sub_category': 'array',
      'sub_category.*.name': 'string|required',
      'sub_category.*.id': 'integer',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let category: any = record
    if (category === null) {
      category = new Category()
    }
    const { sub_category } = request.all()
    try {
      let payload = request.body()  
           const exists = await this.Exists(payload.name);
      if(exists){
        return response.badRequest({error: 'Category Already Exists'})
      }
        category.name = payload.name
        category.slug = payload.name.trim().replace(' ', '-')
        category.image = payload.image
        category.gst = payload.gst
        category = await category.save()
        if (sub_category && sub_category.length) {
           await this.createSubCategory(category, sub_category) 
        }
        return response.ok({
          message: 'Category Create/Updated Successfully',
          data: category,
        })    
    } catch (exception) {
      return response.internalServerError(exception)
    }
  }

  /**
   *
   * @param category(json)
   * @param sub_category(array)
   */
  async createSubCategory(category, sub_category_list) {
    try {
      for (let sub_cat of sub_category_list) {
        let sub_category = new Category()
        sub_category.name = sub_cat.name
        sub_category.parent_id = category.id
        sub_category.slug = sub_cat.name.trim().replace(' ', '-')
        ;(sub_category.image = sub_cat.image || null),
          (sub_category.gst = sub_cat.gst || null),
          await sub_category.save()
      }
      return true
    } catch (exception) {
      return exception.message
    }
  }

  /**
   *
   * @param request
   * @param response
   */
  async updateStatus({ request, response }) {
    try {
      let { category } = request
      const rules: any = {
        status: 'required|boolean',
      }
      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }
      category.status = request.body().status
      await category.save()
      return response.ok({
        message: 'Category Updated Successfully',
      })
    } catch (exception) {
      return response.internalServerError(exception.message)
    }
  }

  async searchCategory({ response ,request}) {
    try {
      const id = request.all().id
      const categories = await Category.query().where('id', id).preload('menus')

      if (categories.length > 0) {
        return response.ok({ data: categories })
      } else {
        return response.notFound({ message: 'Category Not Found' })
      }
    } catch (exception) {
      return response.internalServerError(exception.message)
    }
  }

  public async Exists(name) {
    const category = await Category.query().where('name', name).first()
    if (category) {
      return true
    } else {
      return false
    }
  } 
}

// [

//   {
//     name: 'spicy',
//     parent_id: "1",
//     image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

//   },
//   {
//     name: 'sweet',
//     parent_id: "2",
//     image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

//   }
// ]
