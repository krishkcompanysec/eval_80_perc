import './groups.css';
import store_delete from './store_delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, {useLayoutEffect,useState,useEffect} from 'react';
import store_groups from './store_groups';

import reload from './Images/reload.png';
import pencil from './Images/pencil.png';

var del;
var store_state;
var flag;

function Groups(){
    
    const token = sessionStorage.getItem("token");
    
    const [state, setState] = useState({
 
        groups:[],
     
    });
    
        
    useLayoutEffect(() => {   
           request()     
    },[]) 
    
    del = function refresh(){
        console.log("req")
        request();
    }
    
    async function request(){
        var config = {
        method: 'get',
        url: 'https://themeshapp.herokuapp.com/main/groups/list/',
        headers: { 
            'Authorization': 'Token ' + token, 
            'Content-Type': 'application/json'
        }
        };

        await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            setState({groups: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    
    function chat(name,created,members,id){
        console.log(name);  
        console.log(created);  
        console.log(members);  
        console.log(id);  
        
        store_groups.dispatch({
            type: "load_chathead",
            payload:
                { name : name,    
                  created :  created,
                  members_data : {members},
                  id  : id
                }
            
        })
        
    }
    
    function new_group()
    {
        store_groups.dispatch({
            type: "load_form"  
        })
    }
    
    return(
        <div>
        <div>
        <h1 id="group_heading">Groups</h1>
            </div>
                   <div className="row">
         <div className="col">  
             
             {state.groups.map(item => (<ul id="group_element_list" key={item.uuid}><Link id ="link" onClick={() => chat(item.groupname,item.created_by,item.groupmembers,item.uuid)}><div className="container" id="group_element">{item.groupname}</div></Link> </ul>))}
                 
        </div>
            </div>
        
        <Link id="reload" onClick={request} > <img alt="panda" className="reload_icon" src={reload} /></Link>

        <Link id="new_group_link" onClick={new_group} > <img alt="panda" className="new" id="new_group" src={pencil} /></Link>
        
    
        
        </div>
    )
}

export default Groups;



store_delete.subscribe(()=>{
    console.log("change_delete");
    store_state=store_delete.getState();
    console.log(store_state);
    flag = store_state["state"];
    
    if(flag == 1)
        {
            del();
        }
    
})
    