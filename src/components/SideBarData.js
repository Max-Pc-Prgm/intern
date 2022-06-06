import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';



export const SideBarData=[
    {
        title:'Home',
        path:'/staff',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'

    },
    {
        title:'SearchCustomer',
        path:'/searchcustomer',
        icon:<BsIcons.BsSearch/>,
        cName:'nav-text'

    },
    {
        title:'AddCustomer',
        path:'/addcustomer',
        icon:<AiIcons.AiOutlineUsergroupAdd/>,
        cName:'nav-text'

    },
    {
        title:'AddSale',
        path:'/addsale',
        icon:<FaIcons.FaRupeeSign/>,
        cName:'nav-text'

    },
    
    

]
