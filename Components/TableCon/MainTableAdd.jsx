import React,{useRef,useState} from 'react'
import DatePicker from "react-datepicker";
import table from '../../pages/API/AirtableApi';

export default function MainTableAdd() {

const [toggle, settoggle] = useState(false)
  const nameRef = useRef();
  const categoryRef = useRef();
  const completeRef = useRef();
  const projectImagesRef = useRef();
  const clientRef = useRef();
  const projectLeadRef = useRef();
  const [kickoffDateRef,setkickoffDateRef] = useState();
  const [DueDateRef,setDueDateRef] = useState();
  const NotesRef = useRef();
  const TaskRef = useRef();

 


    const addHandler = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value
        const category = categoryRef.current.value
        const complete = completeRef.current.checked
        const projectImages = projectImagesRef.current.value
        // const client = clientRef.current.value
        // const projectLead = projectLeadRef.current.value
        const Notes = NotesRef.current.value
        const Task = TaskRef.current.value
         // Update the Api 

       
        table.create([
            {
                "fields": {
                    "Name": name,
                    "Notes": Notes,
                    "category": category,
                    "complete": complete,
                    "client": [
                        "rec91i6hUfAkDZNUQ"
                    ],
                    "Kickoff date": kickoffDateRef.toISOString().slice(0, 10),
                    "Due date": DueDateRef.toISOString().slice(0, 10),
                    "Task": Task,
                }
            }
        ],
            function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });
  
    }

    const ToggleHandler = () => {
        settoggle(toggle = !toggle)
    }
  return (
    <div>
       <div className="addComponent_top" style={(toggle == false)?{display:"none"}:{display:"inline-block"}}>
           <div className="top-top">
           <div className="items-box names_box">
                <input type="text" name="" id="" ref={nameRef} className="items-box" placeholder='Enter Name'/>
           </div>
           <div className="items-box names_box">
           <select className='input_value select' ref={categoryRef} placeholder="select from the options..." >
                              <option selected value="Brand identities">Brand identities</option>
                              <option value="Industrial design">Industrial design</option>
                              <option value="Healthcare design">Healthcare design</option>
                              <option value="Technology design">Technology design</option>
                          </select>
           </div>
           <div className="items-box names_box uniquie">
                <input type="checkbox" name="" id="" ref={completeRef} placeholder="checkbox..." />
           </div>
           <div className="items-box names_box">
                <input type="text" name="" id="" ref={projectImagesRef} className="items-box" placeholder='Upload ur Image..'/>
           </div>
           <div className="items-box names_box">
                <input type="text" name="" id=""  className="items-box" placeholder='clients ...'/>
           </div> 
           <div className="items-box names_box">
                <input type="text" name="" id=""  className="items-box" placeholder='project leads...'/>
           </div>
           <div className="items-box names_box">
           <DatePicker selected={(DueDateRef == "")?"":DueDateRef} onChange={(date) => setDueDateRef(date)} className="input_value" placeholder="kickoff date"/>
           </div>
           <div className="items-box names_box">
           <DatePicker selected={(kickoffDateRef == "")?"":kickoffDateRef} onChange={(date) => setkickoffDateRef(date)} className="input_value"/>
           </div>
           <div className="items-box names_box">
                <input type="text" name="" id="" ref={NotesRef} className="items-box" placeholder='Enter notes Here...'/>
           </div>
           <div className="items-box names_box">
                <input type="text" name="" id="" ref={TaskRef} className="items-box"  placeholder='Enter The  Task'/>
           </div>
           </div>
           <div className="top-bottom">
               <div onClick={addHandler} className="btn btn-primary">Apply</div>
           </div>
       </div>
       <div className="addComponent_bottom">
       <div className="btn-add-row" onClick={ToggleHandler} >{(toggle == false)?"+":"x"}</div>
    </div>
    </div>
  )
}
