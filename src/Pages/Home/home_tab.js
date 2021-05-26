import left_img from './Images/lef.png'
import right_img from './Images/rih.png'
import './home.css'

function Home_tablet() {
  return (
      
    <div>
      
      <div className="cnt">
      <h1 className="mesh">MESH</h1>
      <img alt="left_img" className="left_img" src={left_img} />
       </div>
      <img alt="right_img" className="right_img" src={right_img} />
      <br/>
      <h1>tablet View</h1>
      
    </div>
      
  
  );
}

export default Home_tablet;
