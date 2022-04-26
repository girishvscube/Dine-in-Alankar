import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { Server: 'running...!' }
})



Route.group(() => {
  Route.resource('orders', 'OrderController')
  Route.resource('tables', 'TablesController')
  Route.resource('coupons', 'CouponsController')
  Route.post('subcategory', 'CategoryController.createSubCategory')
  Route.patch('category/:id', 'CategoryController.statuss')
  Route.resource('role', 'RolesController')
  Route.resource('stores', 'StoresController')
  Route.patch('tables/status/:id', 'TablesController.updatestatus')
  Route.patch('orders/payment/status/:id', 'OrderController.updateStatus')
  Route.get('list-data','TablesController.listTable')
  

}).prefix('admin')
  .middleware('auth')



Route.post('login', 'AuthController.login')

Route.group(() => {

  Route.patch('categories/status/:id', 'CategoryController.updateStatus')
    .middleware('find:Category')
  Route.resource('categories', 'CategoryController')
    .middleware({
      show: ['find:Category'],
      update: ['find:Category'],
      destroy: ['find:Category'],
    }).apiOnly()

  Route.patch('menus/status/:id', 'MenuController.updateStatus').middleware('find:Menu')
  Route.patch('menus/availability_count/:id', 'MenuController.updateAvailabilityCount').middleware('find:Menu')
  Route.resource('menus', 'MenuController')
    .middleware({
      show: ['find:Menu'],
      update: ['find:Menu'],
      destroy: ['find:Menu'],
    }).apiOnly()

  Route.patch('users/status/:id', 'UserController.updateStatus').middleware('find:User')
  Route.resource('users', 'UserController')
    .middleware({
      show: ['find:User'],
      update: ['find:User'],
      destroy: ['find:User'],
    }).except(['destroy']).apiOnly()
}).prefix('admin')
  .middleware('auth')



Route.group(() => {
Route.get('orders/active-orders', 'OrderController.activeOrders')
Route.get('orders/past-orders', 'OrderController.pastOrders')
Route.get('orders/type', 'OrderController.getOrdersbytype')
Route.get('order/type', 'OrderController.getOrdersbytypeandDate')
Route.get('orders/revenue', 'OrderController.revenue')
Route.get('reports', 'ReportsController.revenue')
Route.get('reports/today', 'ReportsController.Today')
Route.get('reports/yesterday', 'ReportsController.Yesterday')
Route.get('reports/thisweek', 'ReportsController.ThisWeek')
Route.get('reports/lastweek', 'ReportsController.LastWeek')
Route.get('reports/thismonth', 'ReportsController.ThisMonth')
Route.get('reports/particulardate', 'ReportsController.particularDate')
Route.get('reports/itemsold', 'ReportsController.itemSold')
Route.get('reports/total','ReportsController.totalItemSold')
Route.get('reports/customers','ReportsController.customers')
Route.resource('feedback','FeedbacksController')
Route.get('feedback-count','FeedbacksController.feedbackCount')
Route.patch('table/transfer','OrderController.TableTransfer')
Route.get('category-data','CategoryController.searchCategory')
Route.get('feedback-avg','FeedbacksController.feedbackAvg')
Route.get('feedback-sum','FeedbacksController.Ratingssum')
Route.get('feedback-search','FeedbacksController.Search')
Route.get('feedback-date','FeedbacksController.datewise')
Route.resource('kds','KdsController')

Route.get('reports-month','ReportsController.revenu_six')
Route.resource('permission','PermissionsController')
Route.get('staff-report','FeedbacksController.staffReport')
 }).middleware('auth')
