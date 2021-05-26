import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import './form.css';

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
            console.log("state 2");
        a.preventDefault();       
        
        console.log(state);
            separate();
    }
        
    function separate(){
          var str = state.members;
        console.log(str);
        const stripped =str.replace(/\s+/g, '')
        console.log(stripped);
          res = stripped.split(",");
        console.log(res);

         res2 = res.map(function(val){
              return {"email":val}
          })
     
        console.log("state1");
          console.log(res2);
      
        request();
    }
    
    function sep()
{
    console.log("hi");
}
    
    function request(){
    
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
             console.log("data");
        console.log(payload);
        
var config = {
  method: 'post',
  url: 'https://themeshapp.herokuapp.com/main/groups/add/',
  headers: { 
    'Authorization': 'Token ' + token, 
    'Content-Type': 'application/json'
  },
  data : payload
};
console.log(config);
        
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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