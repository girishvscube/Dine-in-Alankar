import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CategoryValidator from "App/Validators/CategoryValidator";
import Category from "App/Models/Category";


export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input("page", 1);
      const limit = request.input("limit", 2);
      const data =  await Category.query()
      .paginate(page,limit)
      return response.ok({ data: data });
      
    } catch (err) {
      console.log(err);
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

  public async CategoryData({ request, response}: HttpContextContract) {
    try {
      const id = request.all().id;
      const meal = request.all().mealType;
      const page = request.input("page", 1);
      const limit = request.input("limit", 8);
      const category = await Category.findByOrFail('slug',`${id}`);
      const data = await category
        .related("dishes")
        .query().where('dishes.type_of_meal','=',meal)
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
        const data = await Category.findByOrFail('slug',`${id}`);
        data.category_name = category_name;
        data.save();
        response.created({ message: "successfully updated" });
      } else {
        response.badRequest({ message: `${category_name} category exists` });
      }
    } catch (err) {
      console.log(err);
      response.badRequest({err:err.messages});
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const data = await Category.findByOrFail('slug',`${id}`);
      await data.delete();
      response.ok({ message: "Data deleted" });
    } catch (err) {
      console.log(err)
      return response.badRequest({ message: "Data not found!!",err:err.messages });
    }
  }


  public async fetchAll({ request, response }: HttpContextContract) {
    try {     
      const page = request.input("page", 1);
      const limit = request.input("limit", 2);
      const data = await Category.query().preload('dishes').paginate(page, limit);
      if(data.length>0){
        return response.ok({ data: data })
      }
      else{
        return response.notFound({message:"No data found"})
      } 
    } catch (err) {
      return response.notFound({ message: "Requested data not found" });
    }
  }

  public async searchCategory({request,response}){
    try{
      const search = request.all().search.toLowerCase();
      const data = await Category.query()
      .where('category_name', 'like', `%${search}%`)
      if(data.length>0){
        return response.ok({ data: data })
      }
      else{
        return response.notFound({message:"No data found"})
      } 
    }catch(err){
      return response.badRequest({message:"try again later.."})
    }
  }
}
