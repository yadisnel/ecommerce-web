import React, { Fragment,useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import App from './components/app'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import ConfigDB  from './data/customizer/config'

// Error page
import Error400 from "./pages/errors/error400"
import Error401 from "./pages/errors/error401"
import Error403 from "./pages/errors/error403"
import Error404 from "./pages/errors/error404"
import Error500 from "./pages/errors/error500"
import Error503 from "./pages/errors/error503"

// Maintenanc
import Maintenance from "./pages/maintenance"

import Callback from './auth/callback'
import Products from "./components/application/ecommerce-app/product";
import ProductDetail from "./components/application/ecommerce-app/productpage";
import Cart from "./components/application/ecommerce-app/cart";
import Wishlist from "./components/application/ecommerce-app/wishlist";
import Checkout from "./components/application/ecommerce-app/checkout";
import Invoice from "./components/application/ecommerce-app/invoice";
import Productlist from "./components/application/ecommerce-app/productlist";
import Paymentdetails from "./components/application/ecommerce-app/paymentdetails";
import OrderHistory from "./components/application/ecommerce-app/orderHistory";
import Pricing from "./components/application/ecommerce-app/pricing";
import { routesPaths } from "./route/routes";

const routes = [
  { path: routesPaths.products, Component:Products},
  { path: routesPaths.productsPage, Component:ProductDetail},
  { path: routesPaths.cart, Component:Cart},
  { path: routesPaths.wishList, Component:Wishlist},
  { path: routesPaths.checkout, Component:Checkout},
  { path: routesPaths.invoice, Component:Invoice},
  { path: routesPaths.productsList, Component:Productlist},
  { path: routesPaths.paymentDetails, Component:Paymentdetails},
  { path: routesPaths.orderHistory, Component:OrderHistory},
  { path: routesPaths.pricing, Component:Pricing},
]


const Root = (props) =>  {

  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
  const abortController = new AbortController();


  useEffect(() => {
    setAnim(animation)
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;

    return function cleanup() {
      abortController.abort();
    }

    // eslint-disable-next-line
  }, []);

  return(
    <Fragment>
      <Provider store={store}>
        <BrowserRouter basename={routesPaths.baseName}>
          <Switch>
            <Route  path={routesPaths.error400} component={Error400}/>
            <Route  path={routesPaths.error401} component={Error401}/>
            <Route  path={routesPaths.error403} component={Error403}/>
            <Route  path={routesPaths.error404} component={Error404}/>
            <Route  path={routesPaths.error500} component={Error500}/>
            <Route  path={routesPaths.error503} component={Error503}/>
            <Route  path={routesPaths.maintenance} component={Maintenance}/>
            <Route  path={routesPaths.callback} render={() => <Callback/>} />
            <App>
              <TransitionGroup>
                {routes.map(({ path, Component }) => (
                  <Route key={path} path={`${path}`}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={100}
                        classNames={anim}
                        unmountOnExit>
                        <div><Component/></div>
                      </CSSTransition>
                    )}
                  </Route>
                ))}
              </TransitionGroup>
              <Route exact path={routesPaths.baseName} render={() => {
                return (<Redirect exact to={routesPaths.products} />)
              }} />
            </App>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

ReactDOM.render(<Root/>,
  document.getElementById('root')
);
serviceWorker.unregister();
