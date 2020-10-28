import React from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import { Box, Button, Grid, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setPage } from '../../data/actions/formActions';
import { GENERAL_STRINGS, VALIDATION_STRINGS } from '../../constants/stringConstants';
const UserForm = () => {

  const dispatch = useDispatch();
  const page = useSelector(state => state.form.page);
  const formData = useSelector(state => state.form.formData);

  const validationSchema = Yup.object().shape({
    customerName: Yup.string()
      .required(VALIDATION_STRINGS.CustomerNameRequired),
    email: Yup.string()
      .email('Invalid Email'),
    mobileNumber: Yup.string()
      .matches(new RegExp('[0-9]{10}'), VALIDATION_STRINGS.MobileNumberInvalid)
      .required(VALIDATION_STRINGS.MobileNumberRequired)
  })
  return (
    <>
      <Box textAlign='center' py={2} fontWeight={700}>
        {GENERAL_STRINGS.EnterYourDetails}
      </Box>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          dispatch(setFormData(values));
          dispatch(setPage(page + 1))
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2} justify='center'>
              <Grid item xs={12}>
                <Field
                  name="customerName"
                  label="Customer Name *"
                  variant='outlined'
                  fullWidth
                  as={TextField}
                  error={touched.customerName && !!errors.customerName}
                  helperText={touched.customerName && errors.customerName}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant='outlined'
                  fullWidth
                  name="email"
                  label="Email Address"
                  as={TextField}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="mobileNumber"
                  label="Mobile Number *"
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{GENERAL_STRINGS.ContryCode}</InputAdornment>
                  }}
                  error={touched.mobileNumber && !!errors.mobileNumber}
                  helperText={touched.mobileNumber && errors.mobileNumber}
                />
              </Grid>
            </Grid>
            <Box display='flex' justifyContent='flex-end' py={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                {'Next'}
              </Button>
            </Box >
          </Form>
        )}
      </Formik>
    </>
  )
}

export default UserForm;