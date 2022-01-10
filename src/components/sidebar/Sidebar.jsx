import React from 'react'
import './sidebar.css'
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PersonOutline,
    Storefront,
    BarChart

} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                {/* dashboard */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashbord</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>

                {/* quick menus */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menus</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className='link'>
                            <li className="sidebarListItem">
                                <PersonOutline className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
