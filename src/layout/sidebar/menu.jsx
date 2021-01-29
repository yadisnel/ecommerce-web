import { ShoppingBag } from 'react-feather'
import { routesPaths } from "../../route/routes";

export const MENUITEMS = [
    {
        menutitle:"Comprar",
        menucontent:"Disfrute la Exelencia con un click",
        Items:[

            {
                title: 'Productos en Venta', icon:ShoppingBag,active:false, path: routesPaths.products,  type: 'link'
            },
        ]
    },

]
