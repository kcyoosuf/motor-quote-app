import { Box, Button, Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import vehicles from '../../proviers/vehicles'
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setPage } from '../../data/actions/formActions';
import { VALIDATION_STRINGS } from '../../constants/stringConstants';

const useStyles = makeStyles(() => ({
  menuPaper: {
    maxHeight: 500
  }
}));


const VehicleForm = () => {

  const dispatch = useDispatch();
  const page = useSelector(state => state.form.page);
  const formData = useSelector(state => state.form.formData);

  const classes = useStyles();
  const populateYears = () => {
    const year = new Date().getFullYear();
    return (
      Array.from(new Array(50), (v, i) =>
        <MenuItem key={i} value={year + i}>{year - i}</MenuItem>
      )
    );
  }

  const validationSchema = Yup.object().shape({
    vehicleMake: Yup.string()
      .required(VALIDATION_STRINGS.VehicleMakeRequired),
    vehicleModel: Yup.string()
      .required(VALIDATION_STRINGS.VehcleModelRequired),
    mfgYear: Yup.string()
      .required(VALIDATION_STRINGS.MFGRequired),
    vehicleValue: Yup.string()
      .required(VALIDATION_STRINGS.VehicleValueRequired)
  })

  return (
    <>
      <Box textAlign='center' py={2} fontWeight={700}>
        {'Please enter your vehicle details'}
      </Box>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          dispatch(setFormData(values));
          dispatch(setPage(page + 1))
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2} justify='center'>
              <Grid item xs={12}>
                <Field
                  name="vehicleMake"
                  label="Vehicle Make *"
                  variant='outlined'
                  fullWidth
                  as={TextField}
                  select
                  onChange={(e) => {
                    setFieldValue("vehicleMake", e.target.value);
                    setFieldValue("vehicleModel", '')
                  }}
                  error={touched.vehicleMake && !!errors.vehicleMake}
                  helperText={touched.vehicleMake && errors.vehicleMake}
                >
                  {vehicles.map(item =>
                    <MenuItem key={item.value} value={item.value}>{item.vehicleMake}</MenuItem>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant='outlined'
                  fullWidth
                  name="vehicleModel"
                  label="Vehicle Model *"
                  as={TextField}
                  select
                  onChange={(e) => {
                    setFieldValue("vehicleModel", e.target.value);
                  }}
                  SelectProps={{ MenuProps: { classes: { paper: classes.menuPaper } } }}
                  error={touched.vehicleModel && !!errors.vehicleModel}
                  helperText={touched.vehicleModel && errors.vehicleModel}
                >
                  {values.vehicleMake ? vehicles
                    .find(make => make.value === values.vehicleMake).models
                    .map(model => {
                      return <MenuItem value={model.value} key={model.value}>{model.title}</MenuItem>
                    }) : <MenuItem value=""><em>Please Select Make Type First</em></MenuItem>}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="variantType"
                  label="Variant Type"
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={touched.variantType && !!errors.variantType}
                  helperText={touched.variantType && errors.variantType}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="mfgYear"
                  label="Manufacturing Year *"
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  select
                  onChange={(e) => {
                    setFieldValue("mfgYear", e.target.value);
                  }}
                  SelectProps={{ MenuProps: { classes: { paper: classes.menuPaper } } }}
                  error={touched.mfgYear && !!errors.mfgYear}
                  helperText={touched.mfgYear && errors.mfgYear}
                >
                  {populateYears()}
                </Field>
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="vehicleValue"
                  label="Vehicle Value *"
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  type='number'
                  error={touched.vehicleValue && !!errors.vehicleValue}
                  helperText={touched.vehicleValue && errors.vehicleValue}
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
  );
}

export default VehicleForm;