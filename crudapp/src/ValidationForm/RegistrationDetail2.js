import {useFormik} from 'formik';
import * as yup from 'yup'
const  RegistrationDetail2 = () => {


    const initialValues={
        name:'',
        email:''
    }

 const onSubmit=values=>{

    console.log(formik.values);

}

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

const validationSchema=yup.object({

    name:yup.string().required('name is required'),
    email:yup.string().email("Invalid Email").required('email is required')
})

const formik= useFormik({
initialValues,
onSubmit,
validationSchema
//validate   
 })

 console.log(formik.errors);


    return ( <>
    
    <h1>Registration Form</h1>
<form onSubmit={formik.handleSubmit}>
    <div className='form-control'>
    <label>name</label>
    <input type='text'
           name='name' 
            id='name'
     {...formik.getFieldProps('name')} 
     />
    {formik.touched.name && formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}
    </div>

    
    <div className='form-control'>
    <label>email</label>
    <input type='email' 
    name='email'
     id='email' 
     {...formik.getFieldProps('email')}></input>
    {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
   
    </div>

    <button  type="submit">Submit</button>
</form>

    </> );
}
 
export default RegistrationDetail2;