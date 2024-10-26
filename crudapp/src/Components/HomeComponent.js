import { useNavigate } from "react-router-dom";

const HomeComponent = () => {

    const navigate=useNavigate();

    const handleSubmit=()=>{

        navigate('ContactUS');

    }

    return <h1 onClick={handleSubmit}>Home Page is Called</h1>;
  };
  
  export default HomeComponent;