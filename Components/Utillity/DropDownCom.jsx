import React, {useState} from 'react'
import {IoMdArrowDropdown} from "react-icons/io"

export default function DropDownCom() {
    const [toggleList, settoggleList] = useState(false)
    const [droplist, setdroplist] = useState(["customize field type","rename field",
                                              "edit field description","edit field permissons",
                                              "Duplicate field","insert left","insert right",
                                              "sort fast last","sort last fast","filter by this field",
                                              "group by this field","hide field","delete field"
                                            ])

    const showListDropDown = droplist.map( (droplist,index) => {
        return <li className="list-list" key={index} 
                                         onClick={() => {showListItems();}}>
                 <span className="list-icon"></span>
                 <span className="list-name">{droplist}</span>
        </li>
    })
    const showListItems = () => {
      (toggleList == false)?  settoggleList(toggleList = !toggleList):
                              settoggleList(toggleList = !toggleList)
    } 
  return (
    <div className='drop-parent'>
        <div className="dropdown-icon" onClick={showListItems}><IoMdArrowDropdown/></div>
        <ul className="drop-list-box">
             {(toggleList == false)?null:showListDropDown}
        </ul>
    </div>
  )
}
