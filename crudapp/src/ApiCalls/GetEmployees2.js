import axios from "axios";
import { useEffect, useState } from "react";

const GetEmployees2 = () => {
const getApiurl='https://localhost:44366/api/tbl_Employee';
const apiEditUrl='https://localhost:44366/api/tbl_Employee/';



const [data,setData]=useState([]);
const [formdata,setFormdata]=useState({EmpId:0,EmpName:'',EmpSalary:0});



useEffect(()=>{

    getEmployeeData();
},[data])

const getEmployeeData=(async()=>{

    await axios.get(getApiurl).then(res=>{setData(res.data)});

})

 const formInputs=((e)=>{

    let name=e.target.name;
    let value=e.target.value;

    setFormdata({...formdata,[name]:value});
    console.log(formdata);

 })

const formSubmit=((e)=>{

    e.preventDefault();
try{

    if(formdata.EmpId>0){
        axios.put(apiEditUrl+formdata.EmpId,formdata).then(res=>{alert('successfully Update Record');setFormdata({EmpName:'',EmpSalary:''})});

    }
    else{
    axios.post(getApiurl,formdata).then(res=>{alert('Inserted Successfully')});
}
}
catch(e)
{
    console.log(e);
}

})


const getEmployeebyId=(e)=>{
    console.log(e);
    setFormdata(e);

}

const deleteEmployeebyId=(id)=>{
    axios.delete(apiEditUrl+id).then(res=>{alert('successfully Delete Record')});

    }




    return (
        
        <>
        <table className="table table-strip">
<thead>
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Salary</th>
    <th>Action</th>
    </tr>
</thead>
<tbody>
    {data.map(emp=>
    <tr>
<td>{emp.EmpId}</td>
<td>{emp.EmpName}</td>
<td>{emp.EmpSalary}</td>
<td><button className="btn btn-success" onClick={()=>{getEmployeebyId(emp)}}>Edit</button><button className="btn btn-danger" onClick={()=>{deleteEmployeebyId(emp.EmpId)}} >Delete</button></td>

    </tr>
    )}
</tbody>
        </table>
    <h1>Data is Called</h1>
    <br></br>

    <div>
        <form onSubmit={formSubmit}>
            <div>
                <label>EmpName</label>
                <input type="text" name="EmpName" className="form-control" onChange={formInputs} value={formdata.EmpName}></input>
            </div>
            <div>
                <label>EmpSalary</label>
                <input type="number" name="EmpSalary" className="form-control" onChange={formInputs} value={formdata.EmpSalary}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    
    </> );
}
 
export default GetEmployees2;