import store_groups from './store_groups';
import React,{useEffect,useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import './chatbox.css';
import Form from './form';
import axios from 'axios';
var flag;
var store_state;
var load_chathead;
var load_form;
var load_desc;
var group_name;
var data={};
var id;
var created_by;
function Chatbox(){
    
    const[chat_component_status, set_task_component] = useState(0);
    const token = sessionStorage.getItem("token");
    
        function delete_group(id){
        console.log(id);
        
        const payload = {
            "uuid":id
        }
        var data = JSON.stringify({"uuid":id});
        var config = {
  method: 'delete',
  url: 'https://themeshapp.herokuapp.com/main/groups/delete/',
  headers: { 
    'Authorization': 'Token '+ token, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
},
     set_task_component(0)
            )
.catch(function (error) {
  console.log(error);
});
        
       
    }
    

   
     load_chathead = function set_load_chathead(){
          set_task_component(1);
          group_name = store_state["value"]["name"];
          created_by = store_state["value"]["created"]["email"];
          id = store_state["value"]["id"]; 
          data = store_state["value"]["members_data"]["members"]; 
     }
         
     load_form = function set_load_form(){
          set_task_component(2);
     }
    
     load_desc = function set_load_desc(){
          set_task_component(3);
     }
    
        
        if(chat_component_status==0)
        {
        return(
            <div>
        <div>
        <h1 id="heading_chatbox">Chatbox</h1>
        </div>
            <div>
                
        </div>
                </div>
        )
        }        
        else if(chat_component_status==1)
        {
        return(
        <div>
        <Link onClick={load_desc}><div><h1 id="groupname_heading">{group_name}</h1></div></Link>
        
        </div>
        )
        }        
        else if(chat_component_status==2)
        {
        return(
        <div>
        <h1 id="headingform">Form</h1>
        <Form/>
        </div>
        )
        }        
        else if(chat_component_status==3)
        {
        return(
        <div id="chatbox_outer">
            <div id="chatbox_head">
        <h1 id="desc_heading">{group_name}</h1>
            </div>
            <div id="group_data">
        <h5 id="ceated_by">Created by :</h5>
        <p id="name_ceated_by">{created_by}</p>
        <h5>Members</h5>
        <p> {data.map(item => (<ul> {item.email} </ul> ))} </p>
        </div>
                
                <button id="delete_btn" onClick={()=>delete_group(id)}>delete</button>
            </div>
        )
        }
    
    
}

export default Chatbox;



store_groups.subscribe(()=>{
    console.log("change"); 
    store_state=store_groups.getState();
    
    flag = store_state["state"];
    
    if(flag == 1)
        {
            load_chathead();
        }
    else if(flag == 2)
        {
            load_form();
        }
})
    