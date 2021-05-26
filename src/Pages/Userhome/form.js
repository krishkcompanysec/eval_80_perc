import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import './form.css';
import store_groups from './store_groups';
import store_delete from './store_delete';

function Form(){
    const token = sessionStorage.getItem("token");
    var email = sessionStorage.getItem("email");
    var group;
    var res;
    var res2;
    var member_array;
       const [state, setState] = useState({

          group_name:"",
          members :"",
        
    
     });
    
    const handleChange = a =>{
        const {id , value} = a.target;   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))}
    
    
        const handleSubmit = a =>{
          
        a.preventDefault();       
        
        
            separate();
            
            
            
            
    }
        
    function separate(){
          var str = state.members;
        
        const stripped =str.replace(/\s+/g, '')
        
          res = stripped.split(",");
       

         res2 = res.map(function(val){
              return {"email":val}
          })
     

      
        request();
    }
    
    function sep()
{
    console.log("hi");
}
    
    async function request(){
    
   var data = JSON.stringify({"groupname":group,"created_by":{"email":email},"groupmembers":[{"email":"krishnaanilkumar007@gmail.com"}]});
   
        
        const payload_working={
         //   "email":state.email,
         //   "password":state.password,
           "groupname":state.group_name,
           "created_by":{email},
            "groupmembers":[{"email":"krishnaanilkumar007@gmail.com"}]
            }      
        const payload={
         //   "email":state.email,
         //   "password":state.password,
           "groupname":state.group_name,
           "created_by":{email},
            "groupmembers":res2
            }
            
        
var config = {
  method: 'post',
  url: 'https://themeshapp.herokuapp.com/main/groups/add/',
  headers: { 
    'Authorization': 'Token ' + token, 
    'Content-Type': 'application/json'
  },
  data : payload
};

        
await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
    
        refresh();
        
    }
   
    function refresh(){
                store_groups.dispatch({
            type: "load_home",  
        })
        
        store_delete.dispatch({
            type: "delete_group",
            
        })
    }
     /*
        const payload={
         //   "email":state.email,
         //   "password":state.password,
           "groupname":state.group_name,
           "created_by":{email_id},
            "groupmembers":[{"email":"krishnaanilkumar007@gmail.com"}]
            }
     
       console.log("payload");
         console.log(payload);
       req = payload + axios.post("https://themeshapp.herokuapp.com/main/groups/add/", payload,{headers: {'Authorization': "Token " + token}
  }).then((response) => {
 
        console.log("response");
         console.log(response);
          switch(response.status)
              {
                case 200:
      
            console.log(response.data);
                      
            break;
      
          default:
              console.log("nope");
                      console.log("nope");
            

            break;
              }
      },
                                                             
          (error) => {
  console.log(error);
          
        }                                                   
                                                             
                                                             
    )  
    }*/
    
    
    return(
    
        <div>
    
        
        
        <form onSubmit = {handleSubmit} id="form">
        <div>
          <label>
            Group Name: 
    <input type="text" id="group_name" onChange={handleChange} />
        </label>
        </div>
        <div>
           <label>
        Members
            <input type="text" id="members" onChange={handleChange} />
        </label>
         </div>
       
        <input type="submit" value="Submit" id="sub_btn"/>
    
        
        </form>
        
        
        </div>
    )
}

export default Form;