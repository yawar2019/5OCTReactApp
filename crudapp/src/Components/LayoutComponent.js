// bootstrap.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Outlet,Link} from "react-router-dom";
 const LayoutComponent=()=>{

return(

    <>
    
     <nav className="navbar navbar-expand-sm bg-dark">
           <div className='container-fluid'>
            <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="ContactUS">Contact</Link></li>
            </ul>
            </div>
        </nav>
        <div className="container-fluid">
        <div className="row">
        
       
        <div className="col-md-2" style={{backgroundColor:"skyblue",marginLeft:"2px",height:"800px"}}>
   
       
       
      <p>Lorem ipsum dolor sit ame.</p>
      
      </div>
    
    <div className="col-md-8">
     <Outlet/>
      
    </div>
    <div className="col-md-2">
        </div>
 

<div className="mt-0 p-4 bg-dark text-white text-center">
  <p>Footer</p>
</div>
</div>  
</div>
    </>
)

}

export default LayoutComponent;