import {Home,Anchor,Headphones} from 'react-feather/dist/index'
export const MENUITEMS = [
  {
    menutitle:"Ventas Online, Serbia.",
    menucontent:"Comercio Electronico.",
    Items:[
      {
        title: 'Compra', icon: Home,  active: false, path: `${process.env.PUBLIC_URL}/dashboard/productos`, type: 'link' 
           
          //{ path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: '', type: 'link' },
        
      }
    ]

  }
]
