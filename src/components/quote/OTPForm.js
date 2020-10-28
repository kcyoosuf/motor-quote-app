import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setPage } from '../../data/actions/formActions';
import colors from '../../theme/colors';
import { GENERAL_STRINGS, VALIDATION_STRINGS } from '../../constants/stringConstants';

const OTPForm = () => {

  const dispatch = useDispatch();
  const page = useSelector(state => state.form.page);
  const formData = useSelector(state => state.form.formData);

  const validationSchema = Yup.object().shape({
    otp: Yup.number()
      .required(VALIDATION_STRINGS.OTPRequired)
  })

  return (
    <>
      <Box textAlign='center' py={2}>
        {`Please enter the 6 digit OTP code recieved on your phone`}
        <Box fontWeight={700}>
          {GENERAL_STRINGS.ContryCode} {formData.mobileNumber}
        </Box>
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
                  name="otp"
                  label="Enter OTP *"
                  variant='outlined'
                  fullWidth
                  as={TextField}
                  error={touched.otp && !!errors.otp}
                  helperText={touched.otp && errors.otp}
                />
              </Grid>
            </Grid>
            <Box display='flex' justifyContent='flex-start' py={2}>
              {`Didn't recieved code ? `} <Box color={colors.blue}>{' Resend'}</Box>
            </Box>
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
  );
}

export default OTPForm;