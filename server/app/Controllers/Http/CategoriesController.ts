import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CategoryValidator from "App/Validators/CategoryValidator";
import Category from "App/Models/Category";
import Database from "@ioc:Adonis/Lucid/Database";

export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input("page", 1);
      const limit = request.input("limit", 2);
      const data = await Database.from("categories")
    //  .where('deleted_at', '=' ,'null')
      .paginate(page, limit);
      return response.ok({ data: data });
      
    } catch (err) {
      return response.notFound({ message: "No data found!! please try again",err:err });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const { category_name } = await request.validate(CategoryValidator);
      console.log(category_name)
      const categoryPresent = await Category.findBy(
        "category_name",
        `${category_name}`
      );

      if (categoryPresent) {
        return response.badRequest({
          message: `${category_name} already exists in the category list`,
        });
      } else {
        const data = await Category.create({ category_name });
        response.created({
          message: "category created successfully",
          data: data,
        });
      }
    } catch (err) {
      return response.badRequest({
        message: "Adding of category failed Due to null value!!",err:err
      });
    }
  }

  public async show({ request, response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const page = request.input("page", 1);
      const limit = request.input("limit", 2);
      const category = await Category.findByOrFail('slug',`${id}`);
      const data = await category
        .related("dishes")
        .query()
        .paginate(page, limit);
      return response.ok({ data: data });
    } catch (err) {
      return response.notFound({ message: "Requested data not found" });
    }
  }



  public async update({ request, response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const { category_name } = await request.validate(CategoryValidator);
      const ifExists = await Category.findBy(
        "category_name",
        `${category_name}`
      );
      if (!ifExists) {
        const data = await Category.findOrFail(id);
        data.category_name = category_name;
        data.save();
        response.created({ message: "successfully updated" });
      } else {
        response.badRequest({ message: `${category_name} category exists` });
      }
    } catch (err) {
      response.badRequest({ message: "category_name field cannot be null" });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const data = await Category.findOrFail(id);
      await data.delete();
      response.ok({ message: "Data deleted", data: data });
    } catch (err) {
      console.log(err)
      return response.badRequest({ message: "Data not found!!",err:err });
    }
  }
  public async fetchAll({ request, response }: HttpContextContract) {
    try {
      
      const page = request.input("page", 1);
      const limit = request.input("limit", 2);
      const data = await Category.query().preload('dishes').paginate(page, limit);
      return response.ok({ data: data });
    } catch (err) {
      return response.notFound({ message: "Requested data not found" });
    }
  }

  async categorydata({response,request}){
   const id = request.all().id;
    
     const category = await Category.withTrashed().where('id',id).firstOrFail()
     if (category.trashed) {
       return response.forbidden()
     }
     return category
  }

 async alldata(){
  return Category.onlyTrashed().exec()
 }

 async slugwise({params}){

  const id  = params.id;

  const data = await Category.findByOrFail('slug',`${id}`);
  return data;


 }


}
