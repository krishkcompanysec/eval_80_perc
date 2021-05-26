import { Breakpoint } from 'react-socks';
import HomeHeader from './Components/homeheader';
import Home_desk from './Home/home_desk';
import Home_mobile from './Home/home_mob';
import Home_tablet from './Home/home_tab';

function Home(){
    
    
    return(
        <div>
        
        <Breakpoint large>
        <HomeHeader/>
        
        <Home_desk/>
        </Breakpoint>
        
        <Breakpoint medium >
        <HomeHeader/>
       
        <Home_tablet/>
        
        </Breakpoint>
        
        
        <Breakpoint small>
        <HomeHeader/>
        
        <Home_mobile/>
        </Breakpoint>
        </div>
    )
    
}

export default Home;