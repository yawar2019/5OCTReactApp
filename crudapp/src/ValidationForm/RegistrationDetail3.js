import {useFormik,Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup'
const  RegistrationDetail3 = () => {


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

    <Formik initialValues={initialValues} 
    onSubmit={onSubmit} 
    validationSchema={validationSchema} >

<Form>
    <div className='form-control'>
    <label>name</label>
    <Field type='text'
    name='name' 
    id='name'/>
   <ErrorMessage name='name'></ErrorMessage>
    </div>
    <div className='form-control'>
    <label>email</label>
    <Field type='email' 
    name='email'
     id='email' 
    />
     <ErrorMessage name='email'></ErrorMessage>
    </div>

    <button  type="submit">Submit</button>
</Form>
</Formik>
    </> );
}
 
export default RegistrationDetail3;