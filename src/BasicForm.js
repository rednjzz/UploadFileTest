import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BasicForm = () => {
  const emailValidation = useCallback((values)=> {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){
      errors.email = 'Invalid email addresss';
    }
    return errors;
  }, [])
  const submitHandler = ( values, { setSubmitting }) => {
    setTimeout( () => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 10)
  }

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues = {{ email: '', password: ''}}
        validate = { emailValidation }
        onSubmit = { submitHandler }
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type={"email"} name={"email"} />
            <ErrorMessage name={"email"} component={"div"} />
            <Field type={"password"} name={"password"} />
            <ErrorMessage name={"password"} component={"div"} />
            <button type={"submit"} disabled={isSubmitting} >전송</button>
          </Form>
        )}
        {/*{({*/}
        {/*  values,*/}
        {/*  errors,*/}
        {/*  touched,*/}
        {/*  handleChange,*/}
        {/*  handleBlur,*/}
        {/*  handleSubmit,*/}
        {/*  isSubmitting*/}
        {/*}) => {*/}
        {/*  return (*/}
        {/*    <form onSubmit={handleSubmit}>*/}
        {/*      <input*/}
        {/*        type={"email"}*/}
        {/*        name={"email"}*/}
        {/*        onChange={handleChange}*/}
        {/*        onBlur={handleBlur}*/}
        {/*        value={values.email}*/}
        {/*      />*/}
        {/*      {errors.email && touched.email && errors.email}*/}
        {/*      <input*/}
        {/*        type={"password"}*/}
        {/*        name={"password"}*/}
        {/*        onChange={handleChange}*/}
        {/*        onBlur={handleBlur}*/}
        {/*        value={values.password}*/}
        {/*      />*/}
        {/*      {errors.password && touched.password && errors.password}*/}
        {/*      <button type="submit" disabled={isSubmitting}>Submit</button>*/}
        {/*    </form>*/}
        {/*  )}}*/}
      </Formik>
    </div>
  )
}
export default BasicForm