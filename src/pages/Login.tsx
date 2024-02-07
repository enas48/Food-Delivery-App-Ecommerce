import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import {
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required.'),
  email: Yup.string().email('Invalid email').required('This field is required.'),
});

interface MyFormValues {
  email: string;
  password: string
}
const Login: React.FC<{}> = () => {
  const initialValues: MyFormValues = { password: '', email: '' };


  return (
    <Helmet title='Login'>
      <>
        <CommenSection title="Login" />
        <div className='mx-auto max-w-screen-xl p-6 '>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              // alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm()
            }}
          >
            {({ errors, touched }) => (
              <div className="flex w-1/2  flex-col gap-6  p-5 py-9 mx-auto bg-[#fff8eb]  rounded">
                <Form className='flex   flex-col gap-6'>

                  <label htmlFor="email" className='font-medium text-slate-700'>Email</label>
                  <Field id="email" name="email" className={` ${errors.email && touched.email ? 'border-rose-600' : 'border-grey-800'} transition ease-in-out delay-150 bg-transparent py-2 mt-[-1.2rem]  outline-none border-b-2  focus:border-black active:border-black`} placeholder="Enter your Email" />
                  {errors.email && touched.email ? <div className='text-rose-600'>{errors.email}</div> : null}

                  <label htmlFor="password" className='font-medium text-slate-700'>Password</label>
                  <Field id="password" name="password" type='password' className={` ${errors.password && touched.password ? 'border-rose-600' : 'border-grey-800'} transition ease-in-out delay-150 bg-transparent py-2 mt-[-1.2rem]  outline-none border-b-2 border-grey-800 focus:border-black`} placeholder="Enter your Password" />
                  {errors.password && touched.password ? <div className='text-rose-600'>{errors.password}</div> : null}
                  <Button className='bg-[#FB9C16] mx-auto text-white text-nowrap rounded p-2 mt-2 w-max px-5' type='submit' >Login</Button>
                </Form>
                <Link to="/register">don't have account? Create an account</Link>
              </div>
            )}
          </Formik>

        </div>
      </>
    </Helmet>
  )
}

export default Login
