import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function TopbartopbarContainer() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        React Admin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarContainer">
                        <Settings />
                    </div>
                    <img src='https://www.pngkey.com/png/detail/147-1474488_2hugumin-megumin-chibi-png.png' alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
