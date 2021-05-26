import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState} from 'react';
import { Breakpoint } from 'react-socks';
import Homeheader from './Userhome/userheader';
import Userhome_desk from './Userhome/userhome_desk';


function Userhome(){
    
    let history = useHistory();
    
    useLayoutEffect(() => {
         
        if(sessionStorage.getItem("token")==null) 
                                                        
        {
          history.push('/userhome');  
        }
        console.log("Req done");
        console.log(sessionStorage.getItem("token"));
        
    },[])
    
    return(
    
        <div>
        <Breakpoint large>
        <Homeheader/>
        <Userhome_desk/>
        </Breakpoint>
        
        <Breakpoint medium >

        </Breakpoint>
        
        
        <Breakpoint small>

        </Breakpoint>
        </div>
    )
    
}

export default Userhome;