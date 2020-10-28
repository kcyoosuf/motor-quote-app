import React from 'react';
import { AppBar, Toolbar, Box, LinearProgress, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core'
import colors from '../../theme/colors';


const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: colors.white,
    boxShadow:'none'
  }
}))
const TopBar = () => {
  const showLoader = useSelector(state => state.ui.showLoader)
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Box flexGrow="1" alignContent="space-between">
          <img src='/we_search.png' height={50} alt='logo'/>
        </Box>
        <IconButton
          aria-label="open drawer"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {showLoader && <LinearProgress color="secondary" />}
    </AppBar>
  )
}
export default React.memo(TopBar);