import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle:"Comprar",
        menucontent:"Disfrute la Exelencia con un click",
        Items:[
           
            {
                title: 'Productos en Venta', icon:ShoppingBag,active:false, path: `${process.env.PUBLIC_URL}/app/ecommerce/product`,  type: 'link' 
            },
        ]
    },

]   
    