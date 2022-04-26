"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastWeek = exports.Yesterday = exports.Thisweek = exports.Today = exports.ThisMonth_date = exports.calculate = void 0;
function calculate(items) {
    let sub_total = items.reduce(function (sum, current) {
        return (parseFloat(sum) + parseFloat(current.sub_total)).toFixed(2);
    }, 0);
    let gst = items.reduce(function (sum, current) {
        return sum + (current.sub_total * current.gst) / 100;
    }, 0);
    let final_total = (parseFloat(sub_total) + parseFloat(gst)).toFixed(2);
    return {
        sub_total: sub_total,
        tax: gst,
        final_total: final_total,
    };
}
exports.calculate = calculate;
function ThisMonth_date() {
    const today = new Date();
    const month = new Date(today);
    month.setDate(month.getDate() - 30);
    const monthDate = month.toISOString().substring(0, 10);
    return { today, monthDate };
}
exports.ThisMonth_date = ThisMonth_date;
function Today() {
    const today = new Date().toISOString().substring(0, 10);
    ;
    return today;
}
exports.Today = Today;
function Thisweek() {
    const today = new Date();
    const week = new Date(today);
    week.setDate(week.getDate() - 7);
    const weekDate = week.toISOString().substring(0, 10);
    return { today, weekDate };
}
exports.Thisweek = Thisweek;
function Yesterday() {
    const today = new Date();
    const yest = new Date(today);
    yest.setDate(yest.getDate() - 1);
    const yesterday = yest.toISOString().substring(0, 10);
    return yesterday;
}
exports.Yesterday = Yesterday;
function LastWeek() {
    const today = new Date();
    const week = new Date(today);
    week.setDate(week.getDate() - 7);
    const weekDate = week.toISOString().substring(0, 10);
    const lastweek = new Date(week);
    lastweek.setDate(lastweek.getDate() - 7);
    const lastweekDate = lastweek.toISOString().substring(0, 10);
    return { lastweekDate, weekDate };
}
exports.LastWeek = LastWeek;
//# sourceMappingURL=helpers.js.map