import React, {useLayoutEffect,useState,useEffect} from 'react';
import './tasks.css';
import axios from 'axios';
import reload from './Images/reload.png';
import { Link } from 'react-router-dom';

function Tasks(){
    
     const token = sessionStorage.getItem("token");

    var a = [{d:"1"},{d:"2"},{d:"3"}];
    
    var arr = [ {0 : "0",1:{assigner: {}, description: {}, time_due: "26052021", assignee_users: [], assignee_groups: []}}]
    
   const [state, setState] = useState({todos:[]});

    
    
       useLayoutEffect(() => {
      
      req()
      
    },[])       
   
    
        function req(){
        console.log("request tsks"); 
        axios.get("https://themeshapp.herokuapp.com/main/tasks/show/",{
            headers: {'Authorization': "Token " + token}
            }).then((response) => {
          console.log("response.data");
          console.log(response.data);
          console.log(typeof(response.data));
            arr = Object.entries(response.data);
            console.log("arr");
            console.log(arr);
            console.log("arr.data");
            console.log(arr[0][1].time_due);
            console.log(arr[1][1].time_due);
            console.log(arr[2][1].time_due);
            console.log(arr.length);
           setState({todos:arr})
            
            

        })
        .catch(error => console.log(error))



       }
    
    function disp(){
        console.log(state);
    }  
    function disp2(){
        
    }
    
    
    return(
    <div>
        <div>
        <h1 id="heading_tasks">Tasks</h1>
        </div>
        <div>
            
          
            <div id="task_list">
        <div className="row">
         <div className="col" id="name">  
       
      
        
 {  /*     {arr.map(item => (<ul key={item}>{item[0]}</ul>))}   */}
             
             
              
            
             
             {state.todos.map(item => (<ul key={item}>{item[1].description.title}</ul>))} 
             
         {  /*     {a.map(item => (<ul key={item}>{item.d}</ul>))}   */}

        </div>
            
        <div className="col" id="break"> 
       
                  {state.todos.map(item => (<ul key={item}>-</ul>))} 
        </div>
            
         <div className="col" id="due"> 
       
              {state.todos.map(item => (<ul key={item}>{item[1].time_due}</ul>))} 
             
        </div>
        </div>
         </div>
            

                 <Link id="btn_reload" onClick={req} > <img alt="panda" className="btn_reload_icon" src={reload} /></Link>
            
        </div>
            </div>
    )

    
}

export default Tasks;