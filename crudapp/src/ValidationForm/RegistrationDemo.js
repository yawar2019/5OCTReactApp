import { useFormik } from "formik";
import * as yup from 'yup'
const RegistrationDemo = () => {

    const initialValues={
     name:'',
     email:''
    }

const onSubmit=values=>{


    console.log(formik.errors);
}

const validationSchema=yup.object({

    name:yup.string().required('name is required'),
    email:yup.string().email("Invalid Email").required('email is required')
})

   
const validate=values=>{

    let errors={};
    if(!values.name)
    {
        errors.name="Name Required";
    }

    if(!values.email)
        {
            errors.email="Email Required";
        }
        return errors;
}


const formik=useFormik({

    initialValues,
    onSubmit,
   // validate
   validationSchema

});


    return ( <>Registration Form using Formik
    
    <form onSubmit={formik.handleSubmit}>
        <div>
        <label>Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
        {formik.touched.name && formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}
        </div>

        <div>
        <label>Email</label>
        <input type="text" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
        </div>
        <button type="submit">Submit</button>
    </form>
    
    </>  );
}
 
export default RegistrationDemo ;