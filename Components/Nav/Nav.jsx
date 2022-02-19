import React from 'react'
import NavSetting from './NavSetting'
import {MdWorkOutline} from "react-icons/md"

export default function Nav(props) {
    console.log();
  return (
    <>
        <nav>
        {/* Nav bar top section */}
            <div className="nav-bar-container">
                <div className="nav-left-items"></div>
                <div className="nav-center-items">
                    <div className="nav-project-name">
                        <div className="project-icon"><MdWorkOutline/></div>
                        <p>Project Tracker Template </p>
                    </div>
                </div>
                <div className="nav-right-items"></div>
            </div>
            {/* Nav bar bottom section */}
            <div className="nav-bar-container-bottom">
                <div className="nav-tab">{props.tableName.name}</div>
            </div>
        </nav>
        <NavSetting/>
    </>
  )
}
