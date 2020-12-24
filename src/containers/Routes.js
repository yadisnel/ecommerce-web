import React from 'react';
import { Route } from "react-router";
import DashboardGeneral from "./dashboard/General";
import MainBuy from "./main/MainBuy";

//dashboard routes
export const dashboardGeneralRoute = '/dashboard/general'
export const dashboardCategoriesRoute = '/dashboard/categories'
export const dashboardOrdersRoute = '/dashboard/orders'
export const dashboardCustomersRoute = '/dashboard/customers'
export const dashboardReportsRoute = '/dashboard/reports'

//main routes
export const mainBuyRoute = '/'
export const mainSellRoute = '/sell'
export const mainChatRoute = '/chat'

const Routes = (props) => {
  return (
    <>
      <Route path={dashboardGeneralRoute} component={DashboardGeneral} />
      <Route path={mainBuyRoute} exact component={MainBuy} />
    </>
  );
}

export default Routes;
