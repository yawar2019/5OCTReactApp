import axios from 'axios';
import { useEffect,useState } from 'react';
import '../index.css';


const GetEmployees = () => {


    
    const apiUrl="https://localhost:44366/api/tbl_Employee";
    const apiEditUrl="https://localhost:44366/api/tbl_Employee/";

    const[data,Setdata]=useState([]);
    const[Forminput,SetForminput]=useState({EmpName:'',EmpSalary:''});


    useEffect(()=>{

        getEmployeeData();
    
    },[data]);

    const getEmployeeData=async()=>{
    const result=await axios.get(apiUrl);
    Setdata(result.data);
    }

    const UserInput=(e)=>{
const value=e.target.value;
const name=e.target.name;
SetForminput({...Forminput,[name]:value});
    }

    const SubmitForm=(e)=>{
   e.preventDefault();
   console.log(Forminput);
   try{
    if(Forminput.EmpId===undefined){
    axios.post(apiUrl,Forminput).
    then(res=>{alert('successfully Added Record');
    SetForminput({EmpName:'',EmpSalary:''})});
   }
   else{
    axios.put(apiEditUrl+Forminput.EmpId,Forminput).then(res=>{alert('successfully Update Record');SetForminput({EmpName:'',EmpSalary:''})});

   }
}
   catch(e)
   {

console.log(e);
   }
    }

    const getEmployeebyId=(e)=>{
        console.log(e);
        SetForminput(e);

    }

    const deleteEmployeebyId=(id)=>{
    axios.delete(apiEditUrl+id).then(res=>{alert('successfully Delete Record');SetForminput({EmpName:'',EmpSalary:''})});

    }



    return (<>
    <div style={{marginLeft:'20px',paddingTop:'40px',paddingLeft:'40px',backgroundColor:'skyblue',height:'900px'}}>
    <table className='table table-stripped'>
        <thead>
        <tr>
        <th>id</th>
        <th>Name</th>
        <th>Salary</th>
        <th>action</th>
        </tr>
        </thead>
        <tbody>
            {data.map(emp=>
<tr key={emp.EmpId}>
<td>{emp.EmpId}</td>
<td>{emp.EmpName}</td>
<td>{emp.EmpSalary}</td>
<td><button onClick={()=>{getEmployeebyId(emp)}}>Edit</button><button onClick={()=>{deleteEmployeebyId(emp.EmpId)}}>Delete</button></td>
</tr>
            )}
        </tbody>
    </table>
    <div>
        <form onSubmit={SubmitForm}>
        <div class="form-group">
        <label>EmpName</label>
        <input type="text" className="form-control" name="EmpName" onChange={UserInput} value={Forminput.EmpName}></input>
       </div>
       <div class="form-group">
        <label>EmpSalary</label>
        <input type="text" name="EmpSalary" className="form-control" onChange={UserInput} value={Forminput.EmpSalary}></input><br></br>
        <input type="submit" className='btn btn-success' value="submit"></input>
        </div>
        </form>
    </div>
    </div>
    </>);
}
 
export default GetEmployees ;