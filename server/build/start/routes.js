"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { Server: 'running...!' };
});
Route_1.default.group(() => {
    Route_1.default.resource('orders', 'OrderController');
    Route_1.default.resource('tables', 'TablesController');
    Route_1.default.resource('coupons', 'CouponsController');
    Route_1.default.post('subcategory', 'CategoryController.createSubCategory');
    Route_1.default.patch('category/:id', 'CategoryController.statuss');
    Route_1.default.resource('role', 'RolesController');
    Route_1.default.resource('stores', 'StoresController');
    Route_1.default.patch('tables/status/:id', 'TablesController.updatestatus');
    Route_1.default.patch('orders/payment/status/:id', 'OrderController.updateStatus');
    Route_1.default.get('list-data', 'TablesController.listTable');
}).prefix('admin')
    .middleware('auth');
Route_1.default.post('login', 'AuthController.login');
Route_1.default.group(() => {
    Route_1.default.patch('categories/status/:id', 'CategoryController.updateStatus')
        .middleware('find:Category');
    Route_1.default.resource('categories', 'CategoryController')
        .middleware({
        show: ['find:Category'],
        update: ['find:Category'],
        destroy: ['find:Category'],
    }).apiOnly();
    Route_1.default.patch('menus/status/:id', 'MenuController.updateStatus').middleware('find:Menu');
    Route_1.default.patch('menus/availability_count/:id', 'MenuController.updateAvailabilityCount').middleware('find:Menu');
    Route_1.default.resource('menus', 'MenuController')
        .middleware({
        show: ['find:Menu'],
        update: ['find:Menu'],
        destroy: ['find:Menu'],
    }).apiOnly();
    Route_1.default.patch('users/status/:id', 'UserController.updateStatus').middleware('find:User');
    Route_1.default.resource('users', 'UserController')
        .middleware({
        show: ['find:User'],
        update: ['find:User'],
        destroy: ['find:User'],
    }).except(['destroy']).apiOnly();
}).prefix('admin')
    .middleware('auth');
Route_1.default.group(() => {
    Route_1.default.get('orders/active-orders', 'OrderController.activeOrders');
    Route_1.default.get('orders/past-orders', 'OrderController.pastOrders');
    Route_1.default.get('orders/type', 'OrderController.getOrdersbytype');
    Route_1.default.get('order/type', 'OrderController.getOrdersbytypeandDate');
    Route_1.default.get('orders/revenue', 'OrderController.revenue');
    Route_1.default.get('reports', 'ReportsController.revenue');
    Route_1.default.get('reports/today', 'ReportsController.Today');
    Route_1.default.get('reports/yesterday', 'ReportsController.Yesterday');
    Route_1.default.get('reports/thisweek', 'ReportsController.ThisWeek');
    Route_1.default.get('reports/lastweek', 'ReportsController.LastWeek');
    Route_1.default.get('reports/thismonth', 'ReportsController.ThisMonth');
    Route_1.default.get('reports/particulardate', 'ReportsController.particularDate');
    Route_1.default.get('reports/itemsold', 'ReportsController.itemSold');
    Route_1.default.get('reports/total', 'ReportsController.totalItemSold');
    Route_1.default.get('reports/customers', 'ReportsController.customers');
    Route_1.default.resource('feedback', 'FeedbacksController');
    Route_1.default.get('feedback-count', 'FeedbacksController.feedbackCount');
    Route_1.default.patch('table/transfer', 'OrderController.TableTransfer');
    Route_1.default.get('category-data', 'CategoryController.searchCategory');
    Route_1.default.get('feedback-avg', 'FeedbacksController.feedbackAvg');
    Route_1.default.get('feedback-sum', 'FeedbacksController.Ratingssum');
    Route_1.default.get('feedback-search', 'FeedbacksController.Search');
    Route_1.default.get('feedback-date', 'FeedbacksController.datewise');
    Route_1.default.resource('kds', 'KdsController');
    Route_1.default.get('reports-month', 'ReportsController.revenu_six');
    Route_1.default.resource('permission', 'PermissionsController');
    Route_1.default.get('staff-report', 'FeedbacksController.staffReport');
}).middleware('auth');
//# sourceMappingURL=routes.js.map