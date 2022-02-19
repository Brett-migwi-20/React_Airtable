import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import table from '../../pages/API/AirtableApi';
import Dropzone from "react-dropzone";
import Select from 'react-select'
import MainTableAdd from './MainTableAdd';

export default function MainContent() {
        const [storedElements, setstoredElements] = useState([])
        const [Projects, setProjects] = useState([]);
        const [count, setcount] = useState(1)
        const [selected, setselected] = useState("0")
        const [rowList, setrowList] = useState([])
        const [length, setlength] = useState(11)
        const options = [
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' }
                      ]
      
    useEffect(() => {
     table.select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setProjects(records);
        fetchNextPage();
      });
  }, []);
   
  return (
    <div className='btn-container'>
        {(Projects.length > 0)?
          (
            <>{Projects.map((tab,index) => {
          console.log(tab);
           return <div className='remove-space'>
                      <div className="project-list-row" key={index} id={index} >
                      {/* Name Section start */}
                      <div className="project-inner-shell">
                          <div className="project-input" >
                              <input type="text" name="" id="" placeholder={tab.fields.Name} className="input_value" />
                           </div>    
                      </div>
                      {/* Name Section start */} 
                      {/* Name Section start */}
                      <div className="project-inner-shell">
                          <div className="project-input">
                          <select className='input_value select' >
                              <option value=""></option>
                              <option selected={(tab.fields.category == "Brand identity")?tab.fields.category:null} value="Brand identity">Brand identity</option>
                              <option value="Industrial design">Industrial design</option>
                              <option value="Helthcare design">Helthcare design</option>
                              <option value="Technology design">Technology design</option>
                          </select>
                          </div>
                      </div>

                      {/* Complete start */}
                      <div className="project-inner-shell ">
                        <div className="project-input ">
                        <div className="input_value">
                        <input type="checkbox" name="" id="" checked={(tab.fields.complete == true)}/></div>
                        </div>
                      </div>
                      {/* Complete  end */}

                      {/* images  start */}
                      <div className="project-inner-shell">
                        <div className="project-input">
                        <input type="text" name="" id="" value={tab.fields.Name} className="input_value" />
                        </div>
                      </div>
                      {/* Cimages end */}

                      {/* client  start */}
                      <div className="project-inner-shell">
                        <div className="project-input relative">
                         <Select options={options} isMulti={true} className="move_up" /> 
                        </div>
                      </div>
                      {/* Cclient end */}

                       {/* project lead  start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                        <input type="text" name="" id="" className="input_value" />
                        </div>
                      </div>
                      {/*project lead end */}

                       {/* project team  start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                        <input type="text" name="" id="" className="input_value" />
                        </div>
                      </div>
                      {/*project team end */}

                       {/* kickoff date  start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                         <DatePicker selected={(tab.fields["Due date"] == undefined)?"":new Date(tab.fields["Kickoff date"])} className="input_value"/>
                        </div>
                      </div>
                      {/*project lead end */}

                       {/* Due Date  start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                            <DatePicker selected={(tab.fields["Due date"] == undefined)?"":new Date(tab.fields["Due date"])} className="input_value"/>
                            {console.log(tab.fields["Due date"])}
                        </div>
                      </div>
                      {/*Due Date end */}

                       {/* Notes   start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                        <input type="text" name="" id="" className="input_value" placeholder={tab.fields["Notes"]} />
                        </div>
                      </div>
                      {/*Notes  end */}

                       {/* project lead  start */}
                       <div className="project-inner-shell">
                        <div className="project-input">
                        <input type="text" name="" id="" className="input_value" placeholder={tab.fields["Task"]} />
                        </div>
                      </div>
                      {/*project lead end */}


           </div>
           </div>
    })} </>)   :(<>

    <div className="loading-container">
      <div className="loading-text">Loading...</div>
    </div>
    </>)
        }
        <MainTableAdd/>
        <div className="row-counter">{Projects.length} records</div>
    </div>
  )
}
