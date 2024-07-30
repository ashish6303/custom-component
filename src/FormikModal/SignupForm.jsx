import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomModal from '../customComponents/CustomModal';


const SignupForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission
  };

  const initialValues = {
    fname: '',
    lname: '',
    // Add more initial values as needed
  };

  const validationSchema = {
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    // Add more validation rules as needed
  };

  return (
    <div>
      <CustomModal
        title="My Form"
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default SignupForm;