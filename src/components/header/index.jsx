import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlined';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    marginBottom:'5px'
  },
  title: {
    display: 'none',
    color:' rgb(76, 124, 120)',
    fontFamily:'Playfair Display',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const logOut = e=> {
    localStorage.clear();
    console.log('loggefour')
    props.history.push('/');
  }
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >     
      <MenuItem onClick={logOut}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >     
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="rgb(76, 124, 120)">
          <Badge badgeContent={1} color="secondary">
            <CheckBoxOutlineIcon />
          </Badge>
        </IconButton>
        <p>To-do</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="rgb(76, 124, 120)">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="rgb(76, 124, 120)"
        >
          <AccountCircle />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
 
  return (
    <Fragment>
      <div className={classes.grow}>
        <AppBar position="static" color='white'>
          <Toolbar>           
            <Typography className={classes.title} variant="h4" noWrap >
              CollegeMIS
            </Typography>    
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="rgb(76, 124, 120)">
                <Badge badgeContent={1} color="secondary">
                  <CheckBoxOutlineIcon fontSize='large'/>
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="rgb(76, 124, 120)">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon fontSize='large'/>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="rgb(76, 124, 120)"
              >
                <AccountCircle fontSize='large' />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
              
        
    </Fragment>
  );
}
