import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CompanyForm from './CompanyForm';
import FormCompleted from './FormCompleted';
import FormProgress from './FormProgress';
import OTPForm from './OTPForm';
import UserForm from './UserForm';
import VehicleForm from './VehicleForm';
import { useSelector } from 'react-redux';

const renderForm = page => {
  switch (page) {
    case 1:
      return <UserForm />;
    case 2:
      return <OTPForm />;
    case 3:
      return <VehicleForm />;
    case 4:
      return <CompanyForm />;
    case 5:
      return <FormCompleted />;
    default:
      return <UserForm />;
  }

};


const QuoteForm = () => {
  const page = useSelector(state => state.form.page);
  
  return (
    <Box boxShadow={5} p={2}>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} lg={8}>
          <FormProgress />
        </Grid>
        <Grid item xs={12} lg={8}>
          {renderForm(page)}
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuoteForm;