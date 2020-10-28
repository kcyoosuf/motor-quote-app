import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from './Appbar';
import { Container } from '@material-ui/core';
import colors from '../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:colors.white
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: 6,
    margin: 'auto'
  },
}));

const PageContainer = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className={classes.root}>
        <Appbar handleDrawerToggle={handleDrawerToggle} />
        <Container maxWidth="md" className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </Container>
      </div>
    </>
  );
}

export default React.memo(PageContainer);