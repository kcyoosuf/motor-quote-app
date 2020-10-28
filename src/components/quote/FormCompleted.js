import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFormData, setPage } from '../../data/actions/formActions';
import colors from '../../theme/colors';
import DoneIcon from './images/doneIcon.svg'
const FormCompleted = () => {

  const dispatch = useDispatch();
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box color={colors.green} textAlign='center' fontWeight={700} fontSize={20}>
        {'Successfully Submitted'}
      </Box>
      <Box textAlign='center' py={2}>
        Thanks for your details, our staff will be back with our best quote within an hour
      </Box>
      <Box py={2}>
        <img src={DoneIcon} alt='done' width={100} />
      </Box>
      <Box display='flex' justifyContent='center' py={2}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => {
            dispatch(resetFormData())
            dispatch(setPage(1))
          }}
        >
          {'Done'}
        </Button>
      </Box >
    </Box>
  );
}

export default FormCompleted;