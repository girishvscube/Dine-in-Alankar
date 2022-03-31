/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('admin','UsersController')
Route.patch('admin','UsersController.update')
Route.post('login','UsersController.login')
Route.get('mail','UsersController.sendmail')
Route.resource('category','CategoriesController')
Route.resource('dishes','DishesController')
Route.post('file-upload','DishesController.fileUpload')
Route.get('getAll','CategoriesController.fetchAll')
Route.get('item/search-data','DishesController.searchData')
Route.get('meal','CategoriesController.CategoryData')
Route.get('category-data','CategoriesController.searchCategory')
Route.resource('sub-cat','SubcatsController')
Route.get('subcats-data/:id','CategoriesController.fetchSubcat')
Route.resource('table','TablesController')
Route.resource('staff','StaffController')

Route.resource('order','OrdersController')
Route.resource('item-order','ItemOrdersController')
Route.resource('process','ProcessingsController')
Route.resource('role','RolesController')