import React, { useState }  from 'react'
import {MdOutlineViewQuilt} from "react-icons/md"
import {BiHide} from "react-icons/bi"
import {BiFilter} from "react-icons/bi"
import {BiSort} from "react-icons/bi"
import {IoIosColorPalette} from "react-icons/io"



export default function NavSetting() {
  const  [Tabs,setTabs] = useState(["vies","hide fields","filters","sort","color"])
  const  [TabsIcons,setTabsIcons] = useState([<MdOutlineViewQuilt/>,
                                              <BiHide/>,
                                              <BiFilter/>,
                                              <BiSort/>,
                                              <IoIosColorPalette/>])

   // List tabs
   const listNavSettingTabs = Tabs.map((tab,index) => {
          return <div className="field-tabs" key={index}>
                  <div className="field-icon">{TabsIcons[index]}</div>
                  <div className="field-name">{tab}</div>
              </div>
   })   
  return (
   <>
       <div className="nav-setting-container">
          <div className="nav-settting-field">
              {listNavSettingTabs}
          </div>
       </div>
   </>
  )
}
