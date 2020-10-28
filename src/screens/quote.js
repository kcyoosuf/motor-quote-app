import { Box } from '@material-ui/core';
import React from 'react';
import QuoteForm from '../components/quote/QuoteForm';

export default () => {
  return (

    <Box>
      <Box py={4} textAlign='center' fontWeight={700} fontSize={26}>
        {'Get Your Motor Quote'}
      </Box>
      <QuoteForm />
    </Box>
  )
}