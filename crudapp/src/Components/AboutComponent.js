import { useState } from "react";

const AboutComponent = () => {
    const [frmvalue,setfrmvalue]=useState({Country:'india'});
    const countries=['india','pakistan','China'];
    const [selectCt,setselectCt]=useState({});
    const SelectedCountry=(e)=>{
alert(e.target.value);
setselectCt(e.target.value);
setfrmvalue({...frmvalue,[e.target.name]:e.target.value});
    console.log(frmvalue);
}
    return <div>

        <h1>AboutUS Page is Called</h1>
        
        <select name="Country" value={selectCt} onChange={SelectedCountry}>
        {countries.map(c=>
        <option key={c} value={c}>{c}</option>
        )}
        </select>
        
        </div>;
  };
  
  export default AboutComponent;