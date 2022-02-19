import React,{useState,useEffect} from 'react'
import MainSectionBody from './MainSectionBody'


export default function MainTable(props) {

  const [namesFields, setnames] = useState([])


    useEffect (() => {
    props.tableName.
        select( {view :"Grid view"})
      .eachPage( (records,fetchnextPage) =>{
          setnames(records);
          fetchnextPage()
      })
      },[])


  return (
   <>
        <div className="main-table-container">
          {/* Main tableside Bar */}
          <div className="main-table-sidebar"></div>

          {/* Main table main section */}
          <div className="main-table-section">
              <MainSectionBody fields={namesFields}/>
          </div>

        </div>
   </>
  )
}
