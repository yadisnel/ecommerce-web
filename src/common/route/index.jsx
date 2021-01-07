// dashbaord
import Default from '../../modules/dashboard/default'
import Ecommerce from '../../modules/dashboard/ecommerce'

// starter kits
import Starterkits from '../../modules/starter-kits'

export const routes = [
  { path:`${process.env.PUBLIC_URL}/dashboard/default`, Component:Default},
  { path:`${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component:Ecommerce},
  { path:`${process.env.PUBLIC_URL}/starter-kits/sample-page`, Component:Starterkits},
]
