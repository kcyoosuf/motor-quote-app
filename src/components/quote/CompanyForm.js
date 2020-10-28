import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import React from 'react';
import { setFormData, setPage } from '../../data/actions/formActions';
import { useDispatch, useSelector } from 'react-redux';
import { GENERAL_STRINGS, VALIDATION_STRINGS } from '../../constants/stringConstants';

const CompanyForm = () => {

  const dispatch = useDispatch();
  const page = useSelector(state => state.form.page);
  const formData = useSelector(state => state.form.formData);

  const validationSchema = Yup.object().shape({
    dob: Yup.date()
      .required(VALIDATION_STRINGS.DOBRequired),
    licenseIssueDate: Yup.date()
      .required(VALIDATION_STRINGS.LicenseIssueDateRequired),
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
          console.log('Form Values : ', values)
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2} justify='center'>
              <Grid item xs={12}>
                <Field
                  name="dob"
                  label="Date of Birth *"
                  variant='outlined'
                  fullWidth
                  type='date'
                  as={TextField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.dob && !!errors.dob}
                  helperText={touched.dob && errors.dob}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant='outlined'
                  fullWidth
                  name="licenseIssueDate"
                  label="License Issue Date"
                  as={TextField}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.licenseIssueDate && !!errors.licenseIssueDate}
                  helperText={touched.licenseIssueDate && errors.licenseIssueDate}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="companyName"
                  label="Company Name"
                  as={TextField}
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box display='flex' justifyContent='flex-end' py={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                {'Submit'}
              </Button>
            </Box >
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CompanyForm;