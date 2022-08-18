import React from 'react'
import { Formik, Field, Form, } from "formik"
import * as Yup from 'yup';
import InputData from './InputData:';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please fill it, more than 2 words'),
    surname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please fill it, more than 2 words'),
    email: Yup.string().email('Invalid email').required('Please fill it'),
    about: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please fill it, more than 10 letters'),
});

const Forms = () => {
    return (
        <div className='form-wrap' >
            <h3 className="title">My Dynamic Form</h3>
            <Formik initialValues={{
                name: '',
                surname: '',
                email: "",
                about: ""
            }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    // same shape as initial values
                    console.log(values)
                    resetForm({ values: "" } as Object)

                }}

            >
                {({ errors, touched }) => (
                    <Form action="" className='form'>
                        {
                            InputData.map((input: any) => (
                                <div className="row-full">
                                    <label htmlFor="">{input.label}</label>
                                    <div>
                                        <Field name={input.name} placeholder={input.placeholder} className="input" type={input.type} />
                                        {errors.name && touched.name ? (
                                            <div className='error'>{errors.name}</div>
                                        ) : null}
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="row-full">
                    <label htmlFor="">Surname</label>
                    <div>
                        <Field name="surname" placeholder='Your Surname'className="input" type="text" />
                        {errors.surname && touched.surname ? (
                            <div className='error'>{errors.surname}</div>
                        ) : null}
                    </div>
                    
                </div> 
                <div className="row-full">
                    <label htmlFor="">Email</label>
                    <div  className='field'>
                        <Field name="email" placeholder='Your email' className="input" type="email" />
                        {errors.email && touched.email ? (
                            <div className='error'>{errors.email}</div>
                        ) : null}
                    </div>
                    
                </div>
                <div className="row-full">
                    <label htmlFor="">About you</label>
                    <div  className='field'>
                    <Field name ="about" className="textarea"  placeholder='More about you..'  />
                        {errors.about && touched.about ? (
                            <div className='error'>{errors.about}</div>
                        ) : null}</div>
                </div> */}
                <div className="action">
                    <button className='btn' type='submit'>Submit</button>
                    </div>    
                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default Forms