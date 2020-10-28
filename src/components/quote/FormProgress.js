import React from 'react';
import { Box, LinearProgress, Typography, withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import colors from '../../theme/colors';
const FormProgress = () => {

  const page = useSelector(state => state.form.page)
  const LinearProgressWithLabel = (props) => {
    return (
      <Box display="flex" alignItems="center" mb={1}>

        <Box width="100%">
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    );
  }
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 20,
      borderRadius: 3,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 3,
      backgroundColor: colors.green,
    },
  }))(LinearProgressWithLabel);

  return (
    <Box display='flex' flexDirection='column'>
      <Box>
        <Typography variant="body2" color="textSecondary">{`${page - 1} of 4 Completed`}</Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={((page - 1) / 4) * 100} />
    </Box>
  );
}

export default FormProgress;