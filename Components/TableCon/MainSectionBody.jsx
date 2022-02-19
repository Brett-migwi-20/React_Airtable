import React from 'react'
import { useState } from 'react'
import DropDownCom from '../Utillity/DropDownCom'
import MainContent from './MainContent'
import {RiCharacterRecognitionFill} from "react-icons/ri"
import {IoMdArrowDropdownCircle} from "react-icons/io"
import {FaRegCheckSquare} from "react-icons/fa"
import {BsFileEarmarkFill} from "react-icons/bs"
import {IoMdList} from "react-icons/io"
import {BsFillPersonFill} from "react-icons/bs"
import {TiGroup} from "react-icons/ti"
import {BsCalendarDate} from "react-icons/bs"
import {GiNotebook} from "react-icons/gi"
import {BiTask} from "react-icons/bi"

export default function MainSectionBody(props) {
  
    const [tableTabs, settableTabs] = useState(["name","category",
                                               "complete","project images",
                                               "clients","project lead",
                                               "project team","kickoff date",
                                               "due dates","notes","tasks"])
    
     const [iconsTabs, seticonsTabs] = useState([<RiCharacterRecognitionFill/>,<IoMdArrowDropdownCircle/>,
                                                <FaRegCheckSquare/>,<BsFileEarmarkFill/>,
                                                <IoMdList/>,<BsFillPersonFill/>,
                                                <TiGroup/>,<BsCalendarDate/>,<BsCalendarDate/>,
                                               <GiNotebook/>,<BiTask/>])                                          
     
    const listShowTabletabs = tableTabs.map( (tabs, index) => {
        return <div className="main-tab-field" key={index}>
               <div className="grid-box">
               <div className="main-tab-top-field">
                    <div className="main-tab-field-icon">{iconsTabs[index]}</div>
                    <div className="main-tab-field-name">{tabs}</div>
               </div>
               <div className="main-tab-bottom-field">
                      <DropDownCom/>
               </div>
               </div>
        </div>

    })                                           
   
  return (
    <div className="overflow-container">
        <div className="main-table-top-section">
              <div className="main-tab-muilt-field">
              {listShowTabletabs}
              </div>
        </div>
        <div className="main-table-bottom-section">
              <MainContent nameFields={props.fields}/>
        </div>
    </div>

  )
}
