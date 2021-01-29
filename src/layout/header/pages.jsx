import { Film, Image,File } from "react-feather"

export const errorPages = [

            { path: `/error400`, title: 'Error 400', type: 'link' },
            { path: `/error401`, title: 'Error 401', type: 'link' },
            { path: `/error403`, title: 'Error 403', type: 'link' },
            { path: `/error404`, title: 'Error 404', type: 'link' },
            { path: `/error500`, title: 'Error 500', type: 'link' },
            { path: `/error503`, title: 'Error 503', type: 'link' }
]
export const authPages = [
            { path: `/auth/login`, type: 'link', title: 'Login Simple' },
            { path: `/auth/loginWithBgImg1`, type: 'link', title: 'Login with Bg Img 1' },
            { path: `/auth/loginWithBgImg2`, type: 'link', title: 'Login with Bg Img 2' },
            { path: `/auth/loginWithValidation`, type: 'link', title: 'Login With Validation' },
            { path: `/auth/signup`, type: 'link', title: 'Register Simple' },
            { path: `/auth/signupWithImg1`, type: 'link', title: 'Register With Bg Image 1' },
            { path: `/auth/signupWithImg2`, type: 'link', title: 'Register With Bg Image 2' },

]
export const usefullPages = [
            { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser`, type: 'link', title: 'Unlock User' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd`, type: 'link', title: 'Forget Password' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd`, type: 'link', title: 'Reset Password' },
            { path: `${process.env.PUBLIC_URL}/pages/maintenance`, type: 'link', title: 'Maintenance' }
]

export const comingsoonPages = [
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, title: 'Coming-soon',icon:File, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, title: 'Coming-video',icon:Film, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, title: 'Coming-image',icon:Image, type: 'link' },
]
