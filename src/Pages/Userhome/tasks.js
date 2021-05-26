import React, {useLayoutEffect,useState,useEffect} from 'react';
import './tasks.css';
import axios from 'axios';
function Tasks(){
    
     const token = sessionStorage.getItem("token");

    
   const [state, setState] = useState({});
    
    
       useLayoutEffect(() => {
      
      req()
      
    },[])       
   
    
        function req(){
        console.log("request tsks"); 
        axios.get("https://themeshapp.herokuapp.com/main/tasks/show/",{
            headers: {'Authorization': "Token " + token}
            }).then((response) => {
          console.log(response);
          console.log(typeof(response.data));
            var arr = Object.entries(response.data);
            console.log(arr);
            console.log(arr[0][1]);

        })
        .catch(error => console.log(error))



       }
    
    function disp(){
        
    }
    
    
    return(
    <div>
        <div>
        <h1 id="heading_tasks">Tasks</h1>
        </div>
        <div>
            
          
            <div id="task_list">
        <div className="row">
         <div className="col">  
       
        

        </div>
         <div className="col"> 
       
        </div>
        </div>
         </div>
            
            
            
        </div>
            </div>
    )

    
}

export default Tasks;